import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.js'
import Spectrogram from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/spectrogram.js'

import colorMap from '../bone-colormap.json' with { type: 'json' };

const waveHeight = 72;
const spectrogramHeight = 128;
const spectrogramOpacity = 0.9;
const waveformOpacity = 0.10;
const waveformProgressOpacity = 0.3;

const audioFiles = [
  {id: '1', url: './media/20211MP66_longest.wav'},
  {id: '2', url: './media/20221B49_fastest.wav'},
  {id: '3', url: './media/20221C24C_slow.wav'},
  {id: '5', url: './media/O115.mp3'},
  {id: '6', url: './media/greti_greatest_hits_2021.mp3'}
];

for (const audioFile of audioFiles) {
  const containerId = `waveform-${audioFile.id}`;
  const waveContainer = document.querySelector(`#${containerId}`)?.parentElement;

  if (waveContainer) {
    waveContainer.style.setProperty('--wave-height', `${waveHeight}px`);
    waveContainer.style.setProperty('--spectrogram-height', `${spectrogramHeight}px`);
  }

  const wavesurfer = WaveSurfer.create({
    container: `#${containerId}`,
    waveColor: '#f2f2f2',
    progressColor: '#bfbfbf',
    sampleRate: 22050,
    url: audioFile.url,
    height: waveHeight,
    responsive: true,
    hideScrollbar: true,
    cursorColor: "#dfdfdf",
    cursorWidth: 2,
    skipLength: 5,
    normalize: true,
  });

  const spectrogram = wavesurfer.registerPlugin(
    Spectrogram.create({
      colorMap: colorMap,
      fftSamples:1024,
      height: spectrogramHeight,
      labels: false,
      frequencyMax: 10000,
      frequencyMin: 1000
    }),
  )

  const applySpectrogramOverlay = () => {
    const waveWrapper = wavesurfer.getWrapper();
    const waveformCanvas = waveWrapper?.querySelector('.canvases');
    const progressWrapper = waveWrapper?.querySelector('.progress');
    const cursor = waveWrapper?.querySelector('.cursor');

    if (!waveWrapper || !waveformCanvas || !spectrogram.wrapper || !spectrogram.canvasContainer) {
      return;
    }

    const verticalScale = waveHeight / spectrogramHeight;

    Object.assign(waveWrapper.style, {
      height: `${waveHeight}px`,
      overflow: 'hidden',
      background: '#000000',
    });

    Object.assign(waveformCanvas.style, {
      minHeight: `${waveHeight}px`,
      position: 'relative',
      zIndex: '0',
      opacity: `${waveformOpacity}`,
    });

    if (progressWrapper) {
      progressWrapper.style.zIndex = '1';
      progressWrapper.style.opacity = `${waveformProgressOpacity}`;
    }

    if (cursor) {
      cursor.style.zIndex = '3';
    }

    Object.assign(spectrogram.wrapper.style, {
      position: 'absolute',
      top: '50%',
      left: '0',
      width: '100%',
      height: `${spectrogramHeight}px`,
      transform: `translateY(-50%) scaleY(${verticalScale})`,
      transformOrigin: 'center center',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: '2',
      background: 'transparent',
    });

    Object.assign(spectrogram.canvasContainer.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: `${spectrogramHeight}px`,
      opacity: `${spectrogramOpacity}`,
      background: 'transparent',
    });

    spectrogram.wrapper.querySelectorAll('canvas').forEach((canvas) => {
      canvas.style.background = 'transparent';
      canvas.style.opacity = `${spectrogramOpacity}`;
    });
  };

  spectrogram.on('ready', () => {
    requestAnimationFrame(applySpectrogramOverlay);
  });

  wavesurfer.on('ready', () => {
    requestAnimationFrame(applySpectrogramOverlay);
  });

  wavesurfer.on('redrawcomplete', () => {
    requestAnimationFrame(applySpectrogramOverlay);
  });

  wavesurfer.once('interaction', () => {
    wavesurfer.play()
  })

  const togglePauseButton = document.querySelector(`.btn-toggle-pause-${audioFile.id}`);

  togglePauseButton.addEventListener('click', function() {
    if (wavesurfer.isPlaying()) {
      wavesurfer.pause();
      togglePauseButton.innerHTML = '<i class="fa fa-play"></i>';
    } else {
      wavesurfer.play();
      togglePauseButton.innerHTML = '<i class="fa fa-pause"></i>';
    }
  });

  wavesurfer.on('play', function() {
    togglePauseButton.innerHTML = '<i class="fa fa-pause"></i>';
  });

  wavesurfer.on('pause', function() {
    togglePauseButton.innerHTML = '<i class="fa fa-play"></i>';
  });
}
