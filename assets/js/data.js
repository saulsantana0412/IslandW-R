let sectores = [
    {
        nombre: "Zona Colonial",
        contenedores: [
            { lat: 18.4746, lng: -69.8903, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4731, lng: -69.8846, capacidad: "400 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4750, lng: -69.8890, capacidad: "550 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4740, lng: -69.8850, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4725, lng: -69.8875, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4755, lng: -69.8905, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4760, lng: -69.8840, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4735, lng: -69.8865, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4750, lng: -69.8895, capacidad: "550 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4745, lng: -69.8855, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Gascue",
        contenedores: [
            { lat: 18.4665, lng: -69.9128, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4670, lng: -69.9135, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4660, lng: -69.9115, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4680, lng: -69.9120, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4675, lng: -69.9130, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4685, lng: -69.9125, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4668, lng: -69.9120, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4672, lng: -69.9110, capacidad: "550 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4662, lng: -69.9130, capacidad: "500 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4682, lng: -69.9122, capacidad: "600 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" }
        ]
    },
    {
        nombre: "Piantini",
        contenedores: [
            { lat: 18.4640, lng: -69.9378, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4653, lng: -69.9385, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4635, lng: -69.9390, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Lunes a Viernes" },
            { lat: 18.4648, lng: -69.9400, capacidad: "450 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4628, lng: -69.9382, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Martes, Jueves" },
            { lat: 18.4660, lng: -69.9370, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4658, lng: -69.9365, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4630, lng: -69.9395, capacidad: "450 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4645, lng: -69.9405, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4652, lng: -69.9388, capacidad: "550 L", horario: "10:00 AM - 12:00 PM", dias: "Martes, Jueves" }
        ]
    },
    {
        nombre: "Naco",
        contenedores: [
            { lat: 18.4651, lng: -69.9322, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4663, lng: -69.9335, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4670, lng: -69.9318, capacidad: "450 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4649, lng: -69.9340, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4638, lng: -69.9325, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4655, lng: -69.9310, capacidad: "450 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4668, lng: -69.9330, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4672, lng: -69.9315, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4641, lng: -69.9345, capacidad: "450 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4650, lng: -69.9320, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Los Prados",
        contenedores: [
            { lat: 18.4591, lng: -69.9306, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4604, lng: -69.9318, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4610, lng: -69.9295, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4589, lng: -69.9320, capacidad: "450 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4597, lng: -69.9310, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4609, lng: -69.9302, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4593, lng: -69.9290, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4612, lng: -69.9315, capacidad: "450 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4600, lng: -69.9305, capacidad: "550 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4596, lng: -69.9312, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Bella Vista",
        contenedores: [
            { lat: 18.4485, lng: -69.9474, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4498, lng: -69.9486, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4505, lng: -69.9455, capacidad: "500 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4480, lng: -69.9467, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4492, lng: -69.9479, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4500, lng: -69.9448, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4487, lng: -69.9450, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4495, lng: -69.9460, capacidad: "550 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4482, lng: -69.9458, capacidad: "500 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4490, lng: -69.9470, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Ensanche Naco",
        contenedores: [
            { lat: 18.4630, lng: -69.9312, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4645, lng: -69.9320, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4652, lng: -69.9305, capacidad: "450 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4628, lng: -69.9315, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4635, lng: -69.9302, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4642, lng: -69.9325, capacidad: "450 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4650, lng: -69.9318, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4625, lng: -69.9330, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4648, lng: -69.9305, capacidad: "450 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4638, lng: -69.9322, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Santo Domingo Este",
        contenedores: [
            { lat: 18.5011, lng: -69.9370, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5025, lng: -69.9385, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5035, lng: -69.9365, capacidad: "500 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.5000, lng: -69.9378, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5020, lng: -69.9380, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5032, lng: -69.9358, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.5005, lng: -69.9360, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.5028, lng: -69.9372, capacidad: "550 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5030, lng: -69.9380, capacidad: "500 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5015, lng: -69.9355, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Santo Domingo Oeste",
        contenedores: [
            { lat: 18.4635, lng: -69.9955, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4620, lng: -69.9970, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4640, lng: -69.9935, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4630, lng: -69.9945, capacidad: "450 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4615, lng: -69.9950, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4628, lng: -69.9940, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4645, lng: -69.9920, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4632, lng: -69.9960, capacidad: "550 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4640, lng: -69.9930, capacidad: "500 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4625, lng: -69.9955, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Santo Domingo Norte",
        contenedores: [
            { lat: 18.5780, lng: -69.9420, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5790, lng: -69.9440, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5800, lng: -69.9410, capacidad: "500 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.5765, lng: -69.9430, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5775, lng: -69.9425, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5785, lng: -69.9415, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.5795, lng: -69.9445, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.5780, lng: -69.9435, capacidad: "550 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.5805, lng: -69.9410, capacidad: "500 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.5770, lng: -69.9440, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Santo Domingo Sur",
        contenedores: [
            { lat: 18.4770, lng: -69.9345, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4785, lng: -69.9360, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4760, lng: -69.9335, capacidad: "550 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4755, lng: -69.9355, capacidad: "500 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4775, lng: -69.9365, capacidad: "600 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4765, lng: -69.9340, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4780, lng: -69.9350, capacidad: "500 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4770, lng: -69.9360, capacidad: "600 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4750, lng: -69.9345, capacidad: "550 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4775, lng: -69.9350, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Los Cacicazgos",
        contenedores: [
            { lat: 18.4415, lng: -69.9472, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4428, lng: -69.9485, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4435, lng: -69.9450, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4405, lng: -69.9460, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4415, lng: -69.9480, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4425, lng: -69.9445, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4435, lng: -69.9465, capacidad: "550 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4400, lng: -69.9475, capacidad: "500 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4420, lng: -69.9440, capacidad: "600 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4410, lng: -69.9465, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "Margarita",
        contenedores: [
            { lat: 18.4915, lng: -69.9405, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4925, lng: -69.9415, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4935, lng: -69.9395, capacidad: "500 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4905, lng: -69.9410, capacidad: "600 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4920, lng: -69.9400, capacidad: "550 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4910, lng: -69.9385, capacidad: "500 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4925, lng: -69.9390, capacidad: "600 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4930, lng: -69.9410, capacidad: "550 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4900, lng: -69.9395, capacidad: "500 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4915, lng: -69.9400, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    },
    {
        nombre: "San Carlos",
        contenedores: [
            { lat: 18.4645, lng: -69.9290, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4658, lng: -69.9305, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4665, lng: -69.9275, capacidad: "600 L", horario: "06:00 AM - 08:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4635, lng: -69.9285, capacidad: "550 L", horario: "08:00 AM - 10:00 AM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4640, lng: -69.9300, capacidad: "500 L", horario: "05:00 PM - 07:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4655, lng: -69.9270, capacidad: "600 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" },
            { lat: 18.4660, lng: -69.9295, capacidad: "550 L", horario: "10:00 AM - 12:00 PM", dias: "Lunes, Miércoles" },
            { lat: 18.4630, lng: -69.9280, capacidad: "500 L", horario: "01:00 PM - 03:00 PM", dias: "Martes, Jueves" },
            { lat: 18.4645, lng: -69.9295, capacidad: "600 L", horario: "04:00 PM - 06:00 PM", dias: "Lunes, Miércoles, Viernes" },
            { lat: 18.4650, lng: -69.9285, capacidad: "550 L", horario: "07:00 AM - 09:00 AM", dias: "Lunes a Viernes" }
        ]
    }
];
