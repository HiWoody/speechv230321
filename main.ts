asr.onASR(asr.vocabularyList.Learning_entry_3, function () {
    basic.showString("Y")
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    music.playMelody("C5 G B A F A C5 B ", 120)
})
asr.onASR(asr.vocabularyList.Learning_entry_1, function () {
    basic.showString("R")
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.A, function () {
    asr.setASRLearn()
})
input.onButtonPressed(Button.AB, function () {
    asr.delASRLearn()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
asr.onASR(asr.vocabularyList.Learning_entry_2, function () {
    basic.showString("O")
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 15, NeoPixelMode.RGB)
