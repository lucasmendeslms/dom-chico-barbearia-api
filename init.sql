-- Dados para a tabela City
INSERT INTO "City" ("name", "stateId") VALUES
('São Paulo', (SELECT "id" FROM "State" WHERE "abbreviation" = 'SP')),
('Rio de Janeiro', (SELECT "id" FROM "State" WHERE "abbreviation" = 'RJ'));

-- Dados para a tabela BarbershopAddress
INSERT INTO "BarbershopAddress" ("street", "number", "neighborhood", "zipcode", "cityId") VALUES
('Avenida Paulista', '1000', 'Bela Vista', '01310-100', (SELECT "id" FROM "City" WHERE "name" = 'São Paulo')),
('Rua do Ouvidor', '50', 'Centro', '20040-030', (SELECT "id" FROM "City" WHERE "name" = 'Rio de Janeiro'));

-- Dados para a tabela User
INSERT INTO "User" ("googleAccountId", "name", "cpf", "phone", "email", "type", "picture") VALUES
('115690935383614194433', 'Alice Silva', '111.111.111-11', '11999999999', 'alice@example.com', 'CUSTOMER', 'http://example.com/picture1.jpg'),
('289056194720361483726', 'Bob Souza', '222.222.222-22', '21999999999', 'bob@example.com', 'ADMIN', 'http://example.com/picture2.jpg'),
('102938475610293847562', 'Carlos Pereira', '333.333.333-33', '31999999999', 'carlos@example.com', 'BARBER', 'http://example.com/picture3.jpg');

-- Dados para a tabela Customer
INSERT INTO "Customer" ("userId") VALUES
((SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433'));

-- Criar um novo registro na tabela Enrollment e capturar o ID gerado
WITH new_enrollment AS (
    INSERT INTO "Enrollment" DEFAULT VALUES
    RETURNING "id"
)
-- Dados para a tabela Admin
INSERT INTO "Admin" ("userId", "employeeId")
SELECT
    (SELECT "id" FROM "User" WHERE "googleAccountId" = '289056194720361483726'),
    "id" FROM new_enrollment;


-- Dados para a tabela Barbershop
INSERT INTO "Barbershop" ("name", "phone", "cnpj", "addressId", "adminId") VALUES
('Dom Chico Barbershop', '11999999998', '12345678000195', (SELECT "id" FROM "BarbershopAddress" WHERE "street" = 'Avenida Paulista' AND "number" = '1000'), (SELECT "userId" FROM "Admin" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '289056194720361483726')));


-- Criar um novo registro na tabela Enrollment para o Barber e capturar o ID gerado
WITH new_enrollment_barber AS (
    INSERT INTO "Enrollment" DEFAULT VALUES
    RETURNING "id"
)
-- Dados para a tabela Barber
INSERT INTO "Barber" ("userId", "employeeId", "barbershopId")
SELECT
    (SELECT "id" FROM "User" WHERE "googleAccountId" = '102938475610293847562'),
    "id",
    (SELECT "id" FROM "Barbershop" WHERE "name" = 'Dom Chico Barbershop')
FROM new_enrollment_barber;

-- Captura o ID da barbearia recém inserida e cria registros nas tabelas relacionadas
DO $$
DECLARE
    barbershop_id INT;
BEGIN
    -- Captura o ID da barbearia
    SELECT "id" INTO barbershop_id FROM "Barbershop" WHERE "name" = 'Dom Chico Barbershop';

    -- Dados para a tabela BarbershopServices
    INSERT INTO "BarbershopServices" ("name", "price", "duration", "barbershopId") VALUES
    ('Corte de Cabelo', 50.00, '00:30:00', barbershop_id),
    ('Barba', 30.00, '00:20:00', barbershop_id);

    -- Dados para a tabela BarberServices
    INSERT INTO "BarberServices" ("barberId", "serviceId") VALUES
    ((SELECT "employeeId" FROM "Barber" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '102938475610293847562')), (SELECT "id" FROM "BarbershopServices" WHERE "name" = 'Corte de Cabelo'));

    -- Dados para a tabela BarberSchedule
    INSERT INTO "BarberSchedule" ("barberId", "weekday", "startTime", "breakTimeStart", "breakTimeEnd", "endTime") VALUES
    ((SELECT "employeeId" FROM "Barber" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '102938475610293847562')), 'SEGUNDA', '08:00', '12:00', '13:00', '18:00'),
    ((SELECT "employeeId" FROM "Barber" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '102938475610293847562')), 'TERCA', '08:00', '12:00', '13:00', '18:00');

    -- Dados para a tabela BarbershopAppointments
    INSERT INTO "BarbershopAppointments" ("customerId", "barberId", "barbershopId", "dateTime") VALUES
    ((SELECT "userId" FROM "Customer" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433')), (SELECT "employeeId" FROM "Barber" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '102938475610293847562')), barbershop_id, '2024-08-07 10:00:00');

    -- Dados para a tabela ScheduledService
    INSERT INTO "ScheduledService" ("appointmentId", "serviceId") VALUES
    ((SELECT id FROM "BarbershopAppointments" WHERE "customerId" = (SELECT "userId" FROM "Customer" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433'))), (SELECT "id" FROM "BarbershopServices" WHERE "name" = 'Corte de Cabelo'));



	-- Dados para a tabela ServiceDelivery
    INSERT INTO "ServiceDelivery" ("totalPrice", "appointmentId") VALUES
    (50.00, (SELECT "id" FROM "BarbershopAppointments" WHERE "customerId" = (SELECT "userId" FROM "Customer" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433'))));

	 -- Dados para a tabela ServiceDeliveryStatus
    INSERT INTO "ServiceDeliveryStatus" ("serviceDeliveryId", "note", "appointmentStatus", "paymentStatus") VALUES
    ((SELECT "id" FROM "ServiceDelivery" WHERE "appointmentId" = (SELECT "id" FROM "BarbershopAppointments" WHERE "customerId" = (SELECT "userId" FROM "Customer" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433')))), 'Serviço agendado', 'AGUARDANDO', 'PENDENTE');
    

    -- Dados para a tabela ServiceDeliveryStatusLog
    INSERT INTO "ServiceDeliveryStatusLog" ("serviceDeliveryStatusId", "lastUpdate", "modifiedBy") VALUES
    ((SELECT id FROM "ServiceDeliveryStatus" WHERE "serviceDeliveryId" = (SELECT "id" FROM "ServiceDelivery" WHERE "appointmentId" = (SELECT "id" FROM "BarbershopAppointments" WHERE "customerId" = (SELECT "userId" FROM "Customer" WHERE "userId" = (SELECT "id" FROM "User" WHERE "googleAccountId" = '115690935383614194433'))))), '2024-08-07 09:00:00', null);
END $$;
