
function createAssemblyLine() {

    return {
        hasClima: (object) => {

            object.temp = 21
            object.tempSettings = 21
            object.adjustTemp = function () {
                return (this.temp < this.tempSettings) ? this.temp += 1 : this.temp -= 1
            }

        },
        hasAudio: (object) => {
            object.currentTrack = null,
                object.nowPlaying = function ()  {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`)
            }
        },
        hasParktronic: (object) => {
            object.checkDistance = function(num) {
return (num < 0.1) ? console.log("Beep! Beep! Beep!"):(0.1 <= num && num < 0.25) ? console.log("Beep! Beep!") : (0.25 <= num && num < 0.5) ? console.log("Beep!") : ""
            }
         }
    }
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);



21
20
Now playing 'Never Gonna Give You Up' by Rick Astley
Beep!
Beep! Beep!
{
  make: 'Toyota',
  model: 'Avensis',
  temp: 20,
  tempSettings: 18,
  adjustTemp: [Function (anonymous)],
  currentTrack: { name: 'Never Gonna Give You Up', artist: 'Rick Astley' },
  nowPlaying: [Function (anonymous)],
  checkDistance: [Function (anonymous)]
}
