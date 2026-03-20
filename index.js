class SistemaEstacionamiento {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.ocupados = 0;
        this.boletos = {};
    }

    ingresarVehiculo(placa) {
        if (this.ocupados >= this.capacidad) {
            console.log("No hay espacios disponibles.");
            return;
        }

        const horaEntrada = new Date();
        this.boletos[placa] = horaEntrada;
        this.ocupados++;

        console.log(`Vehículo ${placa} ingresó a las ${horaEntrada}`);
    }

    salirVehiculo(placa) {
        if (!this.boletos[placa]) {
            console.log("Vehículo no encontrado.");
            return;
        }

        const horaSalida = new Date();
        const horaEntrada = this.boletos[placa];
        const horas = Math.ceil((horaSalida - horaEntrada) / (1000 * 60 * 60));
        const tarifa = horas * 20;

        delete this.boletos[placa];
        this.ocupados--;

        console.log(`Salida: ${placa}`);
        console.log(`Tiempo: ${horas} horas`);
        console.log(`Total a pagar: $${tarifa}`);
    }
}

// Simulación
const sistema = new SistemaEstacionamiento(2);

sistema.ingresarVehiculo("ABC123");
sistema.ingresarVehiculo("XYZ789");
sistema.ingresarVehiculo("LMN456");

setTimeout(() => {
    sistema.salirVehiculo("ABC123");
}, 3000);