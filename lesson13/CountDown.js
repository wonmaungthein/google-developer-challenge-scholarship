// Orbiter transfers from ground to internal power(T - 50 seconds)
// Ground launch sequencer is go for auto sequence start(T - 31 seconds)
// Activate launch pad sound suppression system(T - 16 seconds)
// Activate main engine hydrogen burnoff system(T - 10 seconds)
// Main engine start(T - 6 seconds)
// Solid rocket booster ignition and liftoff!(T - 0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".

var sec = 60;

while (sec >= 0) {
    console.log(sec === 50 ? "Orbiter transfers from ground to internal power" :
        (sec === 31 ? "Ground launch sequencer is go for auto sequence start" :
            (sec === 16 ? "Activate launch pad sound suppression system" :
                (sec === 10 ? "Activate main engine hydrogen burnoff system" :
                    (sec === 6 ? "Main engine start" :
                        (sec === 0 ? "Solid rocket booster ignition and liftoff!" :
                            ("T-" + sec + " " + (sec === 1 ? "second" : "seconds"))))))));
    sec--;
}