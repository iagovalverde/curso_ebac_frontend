function DBZCharacter(name, power, energyLevel) {
    this.name = name;
    let _power = power;
    let _energyLevel = energyLevel; 
    
    this.getPower = function() {
        return _power;
    }
    this.setPower = function(value) {
        if(typeof value === 'number') {
            _power = value;
        }
    }

    this.getEnergyLevel = function() {
        return _energyLevel;
    }
    this.setEnergyLevel = function(value) {
        if(typeof value === 'number') {
            _energyLevel = value;
        }
    }
}

function Saiyajin(name, power, energyLevel, saiyajinForm) {
    let _saiyajinForm = saiyajinForm;

    this.getSaiyajinForm = function() {
        return _saiyajinForm;
    }
    this.setSaiyajinForm = function(value) {
        if(typeof value === 'string') {
            _saiyajinForm = value;
        }
    }

    DBZCharacter.call(this, name, power, energyLevel);

    this.showInfo = function() {
        console.log(`Name: ${this.name}`,
        `\nPower: ${this.getPower()}`,
        `\nEnergy level: ${this.getEnergyLevel()}`,
        `\nSaiyajin form: ${this.getSaiyajinForm()}`)
    }
}

function Majin(name, power, energyLevel, isPureForm) {
    let _isPureForm = isPureForm;

    this.getIsPureForm = function() {
        return _isPureForm;
    }
    this.setIsPureForm = function(value) {
        if(typeof value === 'boolean') {
            _isPureForm = value
        }
    }

    DBZCharacter.call(this, name, power, energyLevel);

    this.showInfo = function() {
        console.log(`Name: ${this.name}`,
        `\nPower: ${this.getPower()}`,
        `\nEnergy level: ${this.getEnergyLevel()}`,
        `\nIs pure form: ${this.getIsPureForm()}`)
    }
}

const saiyajin1 = new Saiyajin('Goku', 15000, 80, 'Super Saiyajin');
saiyajin1.showInfo();

console.log('--------------------------------');

const saiyajin2 = new Saiyajin('Vegeta', 9000, 70, 'Saiyajin');
saiyajin2.showInfo();

console.log('--------------------------------');

const majin1 = new Majin('Kid Boo', 100000, 100, false);
majin1.setIsPureForm(true);
majin1.showInfo();