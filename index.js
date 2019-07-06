
  function myFilterFun() {
      var filter, li, i
      filter = document.getElementById("searchInput").value.toUpperCase()
      li = document.getElementById("presetSelect").getElementsByTagName("option")
      for (i = 0; i < li.length; i++) 
          if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) 
              li[i].style.display = ""
           else 
              li[i].style.display = "none"
  }

/*
document.addEventListener('DOMContentLoaded', function(){
  var v = document.getElementById('bgvid');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
 
  var cw = Math.floor(canvas.clientWidth / 100);
  var ch = Math.floor(canvas.clientHeight / 100);
  canvas.width = cw;
  canvas.height = ch;
 
  v.addEventListener('play', function(){
    draw(this,context,cw,ch);
  },false);
 
},false);
 
function draw(v,c,w,h) {
  if(v.paused || v.ended) return false;
  c.drawImage(v,0,0,w,h);
  setTimeout(draw,20,v,c,w,h);
}
*/
//visualizer.loadPreset(presets[presetKeys[presetIndex]], 1);
      var songs = [];
      songs["Kanjiklub"] = "https://s3.us-east-2.amazonaws.com/leetcodes/assets/Mike_Emilio_Modo_-_Kanjiklub_2017_Bass_Boosted.mp3";
songs["Hey Oh"] = "https://s3.us-east-2.amazonaws.com/leetcodes/assets/Busta_Rhymes_vs_RHCP_-_Dangerous_Hey_oh_mix.mp3";
    var psets, visualizer = null;
    $(function() { 
      var played = false;
      var queue = new createjs.LoadQueue();
      //visualizer = null;
      var rendering = false;
      var audioContext = null;
      var sourceNode = null;
      var delayedAudible = null;
      var cycleInterval = null;
      var presets = {};
      var presetKeys = [];
      var presetIndexHist = [];
      var presetIndex = 0;
      var presetCycle = true;
      var presetCycleLength = 15000;
      var presetRandom = true;
      var canvas = document.getElementById('canvas');
      var videl = document.querySelector('#bvid video');
      var vido = document.getElementById("bgvid");
      var audio = document.querySelector("video");

      queue.on('fileload', onFileLoad);

      function onFileLoad(event) {
  console.log('File loaded', event);
        document.querySelector("video").src = URL.createObjectURL()
    //$('#bgvid')[0].attr("src", event.result.src)
    playMediaElement()
  //connectToAudioAnalyzer(audioContext.createMediaElementSource(document.getElementById("bgvid")))
  //video.play()
}
      
      
      
      function loadSounds(song) {
 var manifest = [
   {src:songs[song], id:song}
 ];
	queue.loadManifest(manifest);
}

var input = document.querySelector("input[type=file]");
input.onchange = function() {
  audio.src = URL.createObjectURL(input.files[0]);
  audio.play();
} 
      var song = 0;
    hotkeys('ctrl+a,ctrl+b,right,left,up,down', function(event,handler) {
      switch(handler.key){
        case "ctrl+a":(bTime >= 10) ? bTime += 0.5 : bTime = 0;break;
        case "ctrl+b":nextPreset(3);break;
        case "up":audio.src = songs["Kanjiklub"];song++;playMediaElement();break;
        case "down":audio.src = songs["Hey Oh"];song--;playMediaElement();break;
        case "right":nextPreset(bTime);break;
        case "left":prevPreset(bTime);break;
      }
    });

      function connectToAudioAnalyzer(sourceNode) {
        if(delayedAudible) {
          delayedAudible.disconnect();
        }

        //delayedAudible = audioContext.createDelay();
        //delayedAudible.delayTime.value = 0.2;


        sourceNode.connect(audioContext.destination)
        //sourceNode.connect(delayedAudible)
        //delayedAudible.connect(audioContext.destination);
        
        visualizer.connectAudio(sourceNode);
      }

      function startRenderer() {
        requestAnimationFrame(() => startRenderer());
        visualizer.render();
      }

    function playMediaElement() {
        document.querySelector("video").play();
        //$("#canvas").css('display', 'block');
      }

      function playBufferSource(buffer) {
        if (!rendering) {
          rendering = true;
          startRenderer();
        }

        if (sourceNode) {
          sourceNode.disconnect();
        }

        sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = buffer;
        connectToAudioAnalyzer(sourceNode);

        sourceNode.start(0);
        $("#canvas").css('display', 'block');
      }

      function loadLocalFiles(files, index = 0) {
        audioContext.resume();

        var reader = new FileReader();
        reader.onload = function (e) {
          console.log(e);
          $("audio").attr('src', URL.createObjectURL(e.target.result));
          playMediaElement();
        }
        /*
        reader.onload = (event) => {
          audioContext.decodeAudioData(
            event.target.result,
            (buf) => {
              if(sourceNode !== null){
                  sourceNode.disconnect();
                  sourceNode = null;
                }
              playBufferSource(buf);

              
            }
          );
          */

        var file = files[index];
        reader.readAsArrayBuffer(file);
      }

      function connectMicAudio(sourceNode, audioContext) {
        audioContext.resume();

        var gainNode = audioContext.createGain();
        gainNode.gain.value = 1.25;
        sourceNode.connect(gainNode);

        visualizer.connectAudio(gainNode);
        startRenderer();
      }

      function nextPreset(blendTime = 5.7) {
        presetIndexHist.push(presetIndex);

        var numPresets = presetKeys.length;
        if (presetRandom) {
          presetIndex = Math.floor(Math.random() * presetKeys.length);
        } else {
          presetIndex = (presetIndex + 1) % numPresets;
        }

        visualizer.loadPreset(psets[presetKeys[presetIndex]], blendTime);
        $('#presetSelect').val(presetIndex);
      }

      function prevPreset(blendTime = 5.7) {
        var numPresets = presetKeys.length;
        if (presetIndexHist.length > 0) {
          presetIndex = presetIndexHist.pop();
        } else {
          presetIndex = ((presetIndex - 1) + numPresets) % numPresets;
        }

        visualizer.loadPreset(presets[presetKeys[presetIndex]], blendTime);
        $('#presetSelect').val(presetIndex);
      }

      function restartCycleInterval() {
        if (cycleInterval) {
          clearInterval(cycleInterval);
          cycleInterval = null;
        }

        if (presetCycle) {
          cycleInterval = setInterval(() => nextPreset(2.7), presetCycleLength);
        }
      }
/*
      $(document).keydown((e) => {
        if (e.which === 32 || e.which === 39) {
          nextPreset();
        } else if (e.which === 8 || e.which === 37) {
          prevPreset();
        } else if (e.which === 72) {
          nextPreset(0);
        }
      });
*/
      $('#presetSelect').change((evt) => {
        presetIndexHist.push(presetIndex);
        presetIndex = parseInt($('#presetSelect').val());
        visualizer.loadPreset(presets[presetKeys[presetIndex]], 1);
      });

      $('#presetCycle').change(() => {
        presetCycle = $('#presetCycle').is(':checked');
        restartCycleInterval();
      });

      $('#presetCycleLength').change((evt) => {
        presetCycleLength = parseInt($('#presetCycleLength').val() * 1000);
        restartCycleInterval();
      });

      $('#presetRandom').change(() => {
        presetRandom = $('#presetRandom').is(':checked');
      });


function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};/*
      var songs = {};
      songs["Kanjiklub"] = "https://s3.us-east-2.amazonaws.com/leetcodes/assets/Mike_Emilio_Modo_-_Kanjiklub_2017_Bass_Boosted.opus";
songs["Hey Oh"] = "https://s3.us-east-2.amazonaws.com/leetcodes/assets/Busta_Rhymes_vs_RHCP_-_Dangerous_Hey_oh_mix.mp3";
      
	*/
$("body").click(()=> {
try {
	audio.play();
}catch(e){
	window.location.reload(); // shit quick fix LoL
}
        /*if(!played){
          played = !played;
          queue.loadFile({src:songs["Kanjiklub"], type:createjs.Types.AUDIO})
        }*/
      })
      function initPlayer() {
        audioContext = new AudioContext();

        presets = {};

        if (window.butterchurnPresets) {
          Object.assign(presets, butterchurnPresets.getPresets());
        }
        if (window.butterchurnPresetsExtra) {
          Object.assign(presets, butterchurnPresetsExtra.getPresets());
        }
 
        /*songs = {};
        if (window.myAssets) {
          Object.assign(songs, myAssets.getSongs());
        }*/
        
        var sets = {'laser palace':{"baseVals":{"rating":4,"gammaadj":1.98,"decay":0.5,"echo_zoom":0.952,"echo_alpha":0.5,"echo_orient":3,"wave_mode":6,"additivewave":1,"wave_thick":1,"modwavealphabyvolume":1,"wave_brighten":0,"darken":1,"wave_a":0.312,"wave_scale":1.229,"wave_smoothing":0,"wave_mystery":0.2,"modwavealphastart":0.71,"modwavealphaend":1.3,"warpanimspeed":1.459,"warpscale":2.007,"zoom":0.9999,"warp":0.01,"sx":0.9999,"wave_r":0,"wave_g":0,"wave_b":0,"ob_size":0.005,"ob_a":0.2,"ib_size":0,"ib_r":0,"ib_g":0,"ib_a":1,"mv_x":32,"mv_y":24,"mv_l":0,"mv_b":0.5,"mv_a":0,"b1ed":0},"shapes":[{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}}],"waves":[{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}}],"init_eqs_str":"a.px=0;a.tic=0;a.index2=0;a.crit=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q15=0;a.q29=0;a.l1angy=0;a.dec_med=0;a.py=0;a.mindev=0;a.trel=0;a.t0a=0;a.is_beat=0;a.q23=0;a.q24=0;a.jump=0;a.dec_slow=0;a.ran2=0;a.q11=0;a.q10=0;a.sdev=0;a.pp=0;a.spb=0;a.spb_=0;a.pz=0;a.q16=0;a.avg=0;a.puls=0;a.trig=0;a.beat=0;a.q17=0;a.l1angz=0;a.peak=0;a.q27=0;a.q14=0;a.sw1=0;a.t0=0;a.ran1=0;a.q28=0;a.test=0;a.q30=0;a.q20=0;a.index2=randint(8);a.px=randint(100);a.py=randint(100);a.pz=randint(100);\n","frame_eqs_str":"a.dec_med=pow(.85,div(30,a.fps));a.dec_slow=pow(.95,div(30,a.fps));a.beat=a.mid;a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,1.2*a.avg)*above(a.time,a.t0+.1);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,32);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.spb=Math.min(a.t0-a.t0a+.01,2);a.t0a=a.t0;a.spb_=.00001<Math.abs(a.is_beat)?.9*a.spb_+.1*a.spb:a.spb_;a.mindev=Math.min(Math.min(Math.abs(a.spb-\na.spb_),Math.abs(2*a.spb-a.spb_)),Math.abs(a.spb-2*a.spb_));a.sdev=.00001<Math.abs(a.is_beat)?.96*a.sdev+.04*pow(a.mindev+.01,2):a.sdev;a.q20=a.avg;a.q21=a.beat;a.q22=a.peak+.01;a.q24=a.is_beat;a.q27=a.index;a.q28=a.index2;a.puls=a.puls*a.dec_med+(1-a.dec_med)*a.q24*16*bnot(mod(a.index,4));a.q23=Math.min(1,a.puls);a.test+=120*div(above(a.beat,1.2*a.avg)*(a.beat-a.avg),a.fps);a.tic=div(a.q27,2);a.l1angz=0*a.tic+a.test;a.l1angy=div(1.6*(1+Math.sin(2*a.test)),2);a.sw1=mod(a.q28,2)*above(a.avg,1);a.l1angy=\na.l1angy-div(1,a.q22)*a.sw1+div((1-a.sw1)*a.q22,8);a.l1angy+=2*above(a.avg,1.2)*Math.sin(a.q22);a.l1angz+=above(a.avg,1.2)*a.q22*above(a.q28,4);a.q10=Math.cos(a.l1angz)*Math.sin(a.l1angy);a.q11=Math.sin(a.l1angz)*Math.sin(a.l1angy);a.q12=Math.abs(Math.cos(a.l1angy)*Math.cos(a.l1angy));a.trig=a.q24*bnot(mod(a.index,2));a.ran1=.00001<Math.abs(a.trig)?div(randint(100),100)-.5:a.ran1;a.ran2=.00001<Math.abs(a.trig)?div(randint(100),100)-.5:a.ran2;a.q13=div(a.ran1,2);a.q14=div(a.ran2,2);a.pp=div(4*a.avg*\na.q13,a.fps);a.pp=div(1,a.fps);a.crit=Math.floor(div(a.q27,8));a.px+=equal(a.crit,0)*a.pp;a.py+=equal(a.crit,1)*a.pp;a.pz+=equal(a.crit,2)*a.pp;a.trel+=div(div(1,a.spb_),a.fps);a.jump=Math.floor(a.trel)*below(a.sdev,.004*a.avg);a.q15=a.px+a.jump;a.q16=a.py+a.jump;a.q17=a.pz+a.jump;a.q30=above(a.q28,5);a.monitor=a.avg;a.q29=div(a.q22,16)*(above(a.q22,1.5)+.8-a.avg)+.1*(Math.sin(div(a.time,5))-.8);a.zoom=1;a.warp=0;a.rot=0;a.dx=0;a.dy=-.02;","pixel_eqs_str":"","pixel_eqs":"","warp":"float clip1;\nvec2 xlat_mutableKugel1;\nvec3 xlat_mutablelight;\nfloat xlat_mutablerad1;\nfloat xlat_mutableray1;\nvec2 xlat_mutablersk;\nfloat xlat_mutablesun1;\nvec2 xlat_mutableuv1;\nvec2 xlat_mutableuv3;\nvec2 xlat_mutableuv4;\nvec2 xlat_mutableuv5;\n shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1.x = q13;\n  tmpvar_1.y = q14;\n  clip1 = (float((rand_preset.x >= 0.5)) + 1.0);\n  vec2 uv_2;\n  uv_2 = uv;\n  vec2 uv2_3;\n  float ff_5;\n  float k1_6;\n  float ky_7;\n  vec3 ret_8;\n  xlat_mutableuv1 = ((uv - vec2(0.5, 0.5)) * aspect.xy);\n  xlat_mutableuv3 = (58.0 * xlat_mutableuv1);\n  ky_7 = clamp ((0.04 - (xlat_mutableuv3.y / 40.0)), 0.0, 1.0);\n  k1_6 = (xlat_mutableuv3.x - (sign(xlat_mutableuv3.x) * 14.0));\n  k1_6 = (k1_6 - ((\n    sign(k1_6)\n   * q28) * 2.0));\n  k1_6 = (k1_6 - (sign(k1_6) * 8.0));\n  ff_5 = (16.0 + (16.0 * rand_preset.z));\n  for (int n_4 = 1; float(n_4) <= 6.0; n_4++) {\n    k1_6 = (k1_6 + ((\n      ((-(ff_5) * float(n_4)) * sign(k1_6))\n     * ky_7) * ky_7));\n    ky_7 = clamp ((ky_7 - 0.1), 0.0, 1.0);\n  };\n  float tmpvar_9;\n  tmpvar_9 = clamp (k1_6, -1.57, 1.57);\n  k1_6 = tmpvar_9;\n  float tmpvar_10;\n  tmpvar_10 = clamp ((cos(tmpvar_9) - 0.02), 0.0, 1.0);\n  vec2 tmpvar_11;\n  tmpvar_11.x = cos(q15);\n  tmpvar_11.y = 0.0;\n  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_11));\n  xlat_mutablerad1 = ((16.0 * sqrt(\n    dot (xlat_mutablersk, xlat_mutablersk)\n  )) * (2.0 + cos(q17)));\n  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n    (7.0 * xlat_mutablerad1)\n  ), 0.0, 1.0));\n  vec4 tmpvar_12;\n  tmpvar_12 = (1.0 + slow_roam_sin);\n  xlat_mutablelight = ((0.1 / xlat_mutablerad1) * pow (vec4(q23), tmpvar_12)).xyz;\n  uv_2 = (uv + (xlat_mutableKugel1 * 0.1));\n  vec2 tmpvar_13;\n  tmpvar_13.x = 0.0;\n  tmpvar_13.y = cos((q16 / 2.0));\n  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_13));\n  xlat_mutablerad1 = ((16.0 * sqrt(\n    dot (xlat_mutablersk, xlat_mutablersk)\n  )) * (2.0 + cos(\n    (q17 * 2.0)\n  )));\n  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n    (7.0 * xlat_mutablerad1)\n  ), 0.0, 1.0));\n  xlat_mutablelight = (xlat_mutablelight + ((0.1 / xlat_mutablerad1) * pow (vec4(q23), tmpvar_12)).xyz);\n  uv_2 = (uv_2 + (xlat_mutableKugel1 * 0.1));\n  vec2 tmpvar_14;\n  tmpvar_14.x = cos((q15 / 3.0));\n  tmpvar_14.y = 0.0;\n  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_14));\n  xlat_mutablerad1 = ((16.0 * sqrt(\n    dot (xlat_mutablersk, xlat_mutablersk)\n  )) * (2.0 + cos(\n    (q17 * 3.0)\n  )));\n  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n    (7.0 * xlat_mutablerad1)\n  ), 0.0, 1.0));\n  xlat_mutablelight = (xlat_mutablelight + ((0.1 / xlat_mutablerad1) * pow (vec4(q23), tmpvar_12)).xyz);\n  uv_2 = (uv_2 + (xlat_mutableKugel1 * 0.1));\n  uv_2 = (uv_2 + (tmpvar_10 * 0.05));\n  vec2 tmpvar_15;\n  tmpvar_15 = ((uv_2.yx - 0.5) * (2.0 + tmpvar_10));\n  float ex_16;\n  ex_16 = (0.5 + ((0.3 * q28) / 8.0));\n  float tmpvar_17;\n  tmpvar_17 = sqrt(((tmpvar_15.x * tmpvar_15.x) + (tmpvar_15.y * tmpvar_15.y)));\n  float tmpvar_18;\n  float tmpvar_19;\n  tmpvar_19 = (min (abs(\n    (tmpvar_15.y / tmpvar_15.x)\n  ), 1.0) / max (abs(\n    (tmpvar_15.y / tmpvar_15.x)\n  ), 1.0));\n  float tmpvar_20;\n  tmpvar_20 = (tmpvar_19 * tmpvar_19);\n  tmpvar_20 = (((\n    ((((\n      ((((-0.01213232 * tmpvar_20) + 0.05368138) * tmpvar_20) - 0.1173503)\n     * tmpvar_20) + 0.1938925) * tmpvar_20) - 0.3326756)\n   * tmpvar_20) + 0.9999793) * tmpvar_19);\n  tmpvar_20 = (tmpvar_20 + (float(\n    (abs((tmpvar_15.y / tmpvar_15.x)) > 1.0)\n  ) * (\n    (tmpvar_20 * -2.0)\n   + 1.570796)));\n  tmpvar_18 = (tmpvar_20 * sign((tmpvar_15.y / tmpvar_15.x)));\n  if ((abs(tmpvar_15.x) > (1e-08 * abs(tmpvar_15.y)))) {\n    if ((tmpvar_15.x < 0.0)) {\n      if ((tmpvar_15.y >= 0.0)) {\n        tmpvar_18 += 3.141593;\n      } else {\n        tmpvar_18 = (tmpvar_18 - 3.141593);\n      };\n    };\n  } else {\n    tmpvar_18 = (sign(tmpvar_15.y) * 1.570796);\n  };\n  vec2 tmpvar_21;\n  tmpvar_21.x = (pow (tmpvar_17, ex_16) * cos((tmpvar_18 * ex_16)));\n  tmpvar_21.y = (pow (tmpvar_17, ex_16) * sin((tmpvar_18 * ex_16)));\n  uv2_3 = (0.5 + ((1.0 - \n    abs(((fract(\n      ((vec2(mod (tmpvar_21, clip1))) * 0.5)\n    ) * 2.0) - 1.0))\n  ) - 0.5));\n  ret_8 = ((texture (sampler_main, uv2_3.yx).xyz + texture (sampler_main, uv_orig).xyz) / 2.0);\n  xlat_mutableuv4 = (((uv_2 - 0.5) - tmpvar_1) + tmpvar_10);\n  vec2 tmpvar_22;\n  tmpvar_22.x = q10;\n  tmpvar_22.y = q11;\n  xlat_mutableuv5 = (normalize(xlat_mutableuv4) - tmpvar_22);\n  vec2 x_23;\n  x_23 = (xlat_mutableuv5 / q12);\n  xlat_mutableray1 = (clamp ((1.0 - \n    sqrt(dot (x_23, x_23))\n  ), 0.0, 1.0) + ((0.001 / \n    sqrt(dot (xlat_mutableuv5, xlat_mutableuv5))\n  ) / sqrt(\n    dot (xlat_mutableuv4, xlat_mutableuv4)\n  )));\n  xlat_mutablesun1 = (clamp ((0.002 / \n    sqrt(dot (xlat_mutableuv4, xlat_mutableuv4))\n  ), 0.0, 1.0) / (1.05 - q12));\n  vec3 tmpvar_24;\n  tmpvar_24.x = q27;\n  tmpvar_24.y = (q27 + 3.0);\n  tmpvar_24.z = (q27 + 6.0);\n  ret_8 = (ret_8 + ((xlat_mutableray1 + xlat_mutablesun1) * fract(\n    (tmpvar_24 / 16.0)\n  )));\n  vec2 tmpvar_25;\n  tmpvar_25 = sin(((uv2_3 * 2.0) + (0.2 * \n    ((float(mod (q27, 8.0))) - 4.0)\n  )));\n  ret_8 = (ret_8 + (0.015 / sqrt(\n    dot (tmpvar_25, tmpvar_25)\n  )));\n  ret_8 = (ret_8 + ((\n    pow (tmpvar_10, 3.0)\n   * q29) * (1.0 + roam_sin)).xyz);\n  ret_8 = (ret_8 + xlat_mutablelight);\n  ret_8 = (ret_8 * ((1.0 - \n    (3.3 / fps)\n  ) - (0.02 * \n    dot (((texture (sampler_blur2, uv_orig).xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29))\n  )));\n  vec4 tmpvar_26;\n  tmpvar_26.w = 1.0;\n  tmpvar_26.xyz = ret_8;\n  ret = tmpvar_26.xyz;\n }","comp":" shader_body { \n  vec3 tmpvar_1;\n  vec3 tmpvar_2;\n  tmpvar_2 = clamp ((pow (texture (sampler_main, uv).xyz, vec3(1.2, 1.2, 1.2)) / vec3(1.2, 1.2, 1.2)), 0.0, 1.0);\n  tmpvar_1 = (tmpvar_2 * (tmpvar_2 * (3.0 - \n    (2.0 * tmpvar_2)\n  )));\n  float tmpvar_3;\n  tmpvar_3 = clamp (q20, 0.0, 1.0);\n  vec4 tmpvar_4;\n  tmpvar_4.w = 1.0;\n  tmpvar_4.xyz = mix (vec3(dot (tmpvar_1, vec3(0.32, 0.49, 0.29))), tmpvar_1, vec3((tmpvar_3 * (tmpvar_3 * \n    (3.0 - (2.0 * tmpvar_3))\n  ))));\n  ret = tmpvar_4.xyz;\n }"},'test': {"baseVals":{"rating":3,"decay":0.5,"echo_zoom":1,"echo_alpha":0.5,"echo_orient":3,"wrap":0,"darken_center":1,"solarize":1,"wave_a":0.001,"zoom":0.97,"rot":-6.27999,"warp":0.00052,"wave_r":0,"wave_g":0,"wave_b":0,"ob_r":1,"ob_g":1,"ob_b":1,"mv_r":0.8,"mv_a":0},"shapes":[{"baseVals":{"enabled":0}},{"baseVals":{"enabled":1,"textured":1,"x":0.25,"y":0.75,"rad":4.44708,"tex_zoom":0.22746,"r":0,"a":0.1,"g2":0,"a2":0.2,"border_r":0,"border_g":0,"border_a":0},"init_eqs_str":"a.q1=0;a.tex_capture=0;a.q3=0;a.tex_saw=.4;","frame_eqs_str":"a.ang=.2*a.q1;a.tex_capture=above(a.q3,1);a.tex_zoom=.6;"},{"baseVals":{"enabled":0}},{"baseVals":{"enabled":0}}],"waves":[{"baseVals":{"enabled":1,"thick":1,"smoothing":0},"init_eqs_str":"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;","frame_eqs_str":"","point_eqs_str":"a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.12*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.r=.5*Math.sin(1.22*a.time)+.6;a.g=.4+.4*Math.sin(1.307*a.time+2*a.y);a.b=.4+.4*Math.sin(1.959*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;a.ys=.00001<Math.abs(above(a.ys,\n1E3))?0:a.ys;"},{"baseVals":{"enabled":1,"thick":1,"smoothing":0},"init_eqs_str":"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;","frame_eqs_str":"","point_eqs_str":"a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.6*a.x+.2;a.y=.6*a.y+.2;a.r=.5*Math.sin(1.322*a.time)+.6;a.g=.4+.4*Math.sin(1.5407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.759*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;\na.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;"},{"baseVals":{"enabled":1,"thick":1,"smoothing":0},"init_eqs_str":"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;","frame_eqs_str":"","point_eqs_str":"a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.25*a.x+.375;a.y=.25*a.y+.375;a.r=.5*Math.sin(1.622*a.time)+.6;a.g=.4+.4*Math.sin(1.2407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.359*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?\n0:a.xs;a.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;"},{"baseVals":{"enabled":0}}],"init_eqs_str":"a.basstime=0;a.stickybit=0;a.volavg2=0;a.q1=0;a.decay_r=0;a.sample1=0;a.difftime=0;a.diff=0;a.decay_b=0;a.edge=0;a.volavg=0;a.bit2=0;a.vol=0;a.q2=0;a.q3=0;a.basssum=0;a.decay_g=0;a.sample2=0;","frame_eqs_str":"a.basstime+=.03*a.bass;a.q1=4*a.basstime;a.basstime=.00001<Math.abs(below(a.basstime,1E3))?1E3:a.basstime;a.basstime+=.03*a.bass_att;a.vol=pow(a.bass+a.mid+a.treb,2);a.basssum=a.vol;a.stickybit=mod(a.time,2);a.volavg+=a.vol*equal(a.stickybit,1);a.sample1+=equal(a.stickybit,1);a.volavg2+=a.vol*equal(a.stickybit,0);a.sample2+=equal(a.stickybit,0);a.edge=bnot(equal(a.bit2,a.stickybit));a.volavg-=a.volavg*a.edge*a.stickybit;a.volavg2-=a.volavg2*a.edge*equal(a.stickybit,0);a.sample1-=\na.sample1*a.edge*a.stickybit;a.sample2-=a.sample2*a.edge*equal(a.stickybit,0);a.diff=.00001<Math.abs(equal(a.stickybit,1))?div(a.basssum,div(a.volavg2,a.sample2)):0;a.diff=.00001<Math.abs(equal(a.stickybit,0))?div(a.basssum,div(a.volavg,a.sample1)):a.diff;a.q3=a.diff;a.bit2=mod(a.time,2);a.difftime+=.03*a.diff;a.q2=a.difftime;a.difftime=.00001<Math.abs(above(a.difftime,2E3))?0:a.difftime;a.monitor=3.14*Math.abs(Math.cos(a.time));a.mv_a=above(a.diff,10);","pixel_eqs_str":"a.zoom=1+.05*a.q3*a.rad;a.decay_r=.2*a.rad*Math.sin(.35*a.q2)+.85+.1*Math.sin(a.q2);a.decay_g=.2*a.rad*Math.sin(.5*a.q2)+.85+.1*Math.sin(.7*a.q2);a.decay_b=.2*a.rad*Math.sin(.4*a.q2)+.85+.1*Math.sin(.8*a.q2);a.rot=0;","warp":" shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (vec2(1.0, 0.0) * texsize.z);\n  vec2 tmpvar_3;\n  tmpvar_3 = (vec2(0.0, 1.0) * texsize.z);\n  ret_1 = (((\n    (texture (sampler_main, (uv + tmpvar_2)).xyz + texture (sampler_main, (uv + tmpvar_2)).xyz)\n   * 0.5) + (\n    (texture (sampler_main, (uv + tmpvar_3)).xyz + texture (sampler_main, (uv + tmpvar_3)).xyz)\n   * 0.5)) - texture (sampler_main, ((\n    (uv - 0.5)\n   * 0.9) + 0.5)).xyz);\n  ret_1 = (ret_1 - 0.4);\n  vec4 tmpvar_4;\n  tmpvar_4.w = 1.0;\n  tmpvar_4.xyz = ret_1;\n  ret = tmpvar_4.xyz;\n }","comp":" shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = ((0.5 - uv) + 0.5);\n  ret_1 = (mix (texture (sampler_main, uv).xyz, texture (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5)) * 2.0);\n  ret_1 = (((\n    ((texture (sampler_blur3, uv).xyz * scale3) + bias3)\n   * 2.0) + (\n    ((texture (sampler_blur3, tmpvar_2).xyz * scale3) + bias3)\n   * 2.0)) + ret_1);\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = ret_1;\n  ret = tmpvar_3.xyz;\n }"}, "turbulence": JSON.parse(atob("eyJzaGFwZXMiOlt7ImJhc2VWYWxzIjp7ImVuYWJsZWQiOjB9fSx7ImJhc2VWYWxzIjp7ImVuYWJsZWQiOjB9fSx7ImJhc2VWYWxzIjp7ImVuYWJsZWQiOjB9fSx7ImJhc2VWYWxzIjp7ImVuYWJsZWQiOjB9fV0sIndhdmVzIjpbeyJiYXNlVmFscyI6eyJlbmFibGVkIjoxLCJzYW1wbGVzIjo0ODQsInNwZWN0cnVtIjoxLCJ0aGljayI6MSwiYWRkaXRpdmUiOjEsInNjYWxpbmciOjEuOTUxMjcsInNtb290aGluZyI6MCwiYSI6MC43fSwiaW5pdF9lcXNfc3RyIjoiYVsnbiddID0gMDsgYVsnbSddID0gMDsgYVsncTMwJ10gPSAwOyAiLCJmcmFtZV9lcXNfc3RyIjoiIiwicG9pbnRfZXFzX3N0ciI6ImFbJ24nXT1NYXRoLmZsb29yKCgoYVsncmVnMDAnXSswLjUpKmFbJ3NhbXBsZSddKSk7IGFbJ20nXT0oMzAwMDErZGl2KGFbJ24nXSxkaXYoYVsncmVnMDAnXSxhWydyZWcwMSddKSkpOyBhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoYVsnbSddKV09KChhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoYVsnbSddKV0qYVsncTMwJ10pKyhkaXYoKDEtYVsncTMwJ10pLDIpKihhWyd2YWx1ZTEnXSthWyd2YWx1ZTInXSkpKTsgYVsneCddPWFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTAwMDArYVsnbiddKSldOyBhWyd5J109YVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxNTAwMCthWyduJ10pKV07IGFbJ2EnXT1hWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDIwMDAwK2FbJ24nXSkpXTsgYVsnYiddPU1hdGgubWluKE1hdGgubWF4KGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMjUwMDArYVsnbiddKSldLCAwKSwgMSk7IGFbJ3InXT0oMS1hWydiJ10pOyBhWydnJ109MC41OyJ9LHsiYmFzZVZhbHMiOnsiZW5hYmxlZCI6MSwic2FtcGxlcyI6NDg0LCJ0aGljayI6MSwiYWRkaXRpdmUiOjEsInNjYWxpbmciOjAuODkxNTIsInNtb290aGluZyI6MC44MiwiYSI6MC45fSwiaW5pdF9lcXNfc3RyIjoiYVsnbiddID0gMDsgIiwiZnJhbWVfZXFzX3N0ciI6IiIsInBvaW50X2Vxc19zdHIiOiJhWyduJ109KE1hdGguZmxvb3IoKChhWydyZWcwMCddKzAuNSkqYVsnc2FtcGxlJ10pKSthWydyZWcwMCddKTsgYVsneCddPWFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTAwMDArYVsnbiddKSldOyBhWyd5J109YVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxNTAwMCthWyduJ10pKV07IGFbJ2EnXT1hWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDIwMDAwK2FbJ24nXSkpXTsgYVsnYiddPU1hdGgubWluKE1hdGgubWF4KGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMjUwMDArYVsnbiddKSldLCAwKSwgMSk7IGFbJ3InXT0oMS1hWydiJ10pOyBhWydnJ109MC41OyJ9LHsiYmFzZVZhbHMiOnsiZW5hYmxlZCI6MSwic2FtcGxlcyI6NDg0LCJ0aGljayI6MSwiYWRkaXRpdmUiOjEsInNjYWxpbmciOjAuODkxNTIsInNtb290aGluZyI6MC44Mn0sImluaXRfZXFzX3N0ciI6ImFbJ24nXSA9IDA7ICIsImZyYW1lX2Vxc19zdHIiOiIiLCJwb2ludF9lcXNfc3RyIjoiYVsnbiddPShNYXRoLmZsb29yKCgoYVsncmVnMDAnXSswLjUpKmFbJ3NhbXBsZSddKSkrKDIqYVsncmVnMDAnXSkpOyBhWyd4J109YVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxMDAwMCthWyduJ10pKV07IGFbJ3knXT1hWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDE1MDAwK2FbJ24nXSkpXTsgYVsnYSddPWFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMjAwMDArYVsnbiddKSldOyBhWydiJ109TWF0aC5taW4oTWF0aC5tYXgoYVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgyNTAwMCthWyduJ10pKV0sIDApLCAxKTsgYVsnciddPSgxLWFbJ2InXSk7IGFbJ2cnXT0wLjU7In0seyJiYXNlVmFscyI6eyJlbmFibGVkIjoxLCJzYW1wbGVzIjo0ODQsInNwZWN0cnVtIjoxLCJ0aGljayI6MSwiYWRkaXRpdmUiOjF9LCJpbml0X2Vxc19zdHIiOiJhWyduJ10gPSAwOyAiLCJmcmFtZV9lcXNfc3RyIjoiIiwicG9pbnRfZXFzX3N0ciI6ImFbJ24nXT0oTWF0aC5mbG9vcigoKGFbJ3JlZzAwJ10tMC41KSphWydzYW1wbGUnXSkpKygzKmFbJ3JlZzAwJ10pKTsgYVsneCddPWFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTAwMDArYVsnbiddKSldOyBhWyd5J109YVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxNTAwMCthWyduJ10pKV07IGFbJ2EnXT1hWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDIwMDAwK2FbJ24nXSkpXTsgYVsnYiddPU1hdGgubWluKE1hdGgubWF4KGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoMjUwMDArYVsnbiddKSldLCAwKSwgMSk7IGFbJ3InXT0oMS1hWydiJ10pOyBhWydnJ109MC41OyJ9XSwiaW5pdF9lcXNfc3RyIjoiYVsneGFuZyddID0gMDsgYVsnZm92J10gPSAwOyBhWydpbmRleDInXSA9IDA7IGFbJ2luZGV4J10gPSAwOyBhWyd5YW5nJ10gPSAwOyBhWydxNiddID0gMDsgYVsnYW1wXyddID0gMDsgYVsneGxlbiddID0gMDsgYVsnc21vb3RoJ10gPSAwOyBhWydxMSddID0gMDsgYVsnZGVjX21lZCddID0gMDsgYVsnc3VtJ10gPSAwOyBhWydxNSddID0gMDsgYVsnZGVjX2YnXSA9IDA7IGFbJ2ZsZW4nXSA9IDA7IGFbJ2RlY19zJ10gPSAwOyBhWydyZWcwMSddID0gMDsgYVsnbXknXSA9IDA7IGFbJ296J10gPSAwOyBhWydpbWFnJ10gPSAwOyBhWyd5aW5kJ10gPSAwOyBhWydkZWNfc2xvdyddID0gMDsgYVsnaW5kJ10gPSAwOyBhWyd5bGVuJ10gPSAwOyBhWydyZWFsJ10gPSAwOyBhWydxNCddID0gMDsgYVsnbXonXSA9IDA7IGFbJ295MCddID0gMDsgYVsnYW1wJ10gPSAwOyBhWydveSddID0gMDsgYVsnbXgnXSA9IDA7IGFbJ3EyJ10gPSAwOyBhWyd6YW5nJ10gPSAwOyBhWydxMyddID0gMDsgYVsncmVnMDAnXSA9IDA7IGFbJ3EzMiddID0gMDsgYVsncTMwJ10gPSAwOyBhWydveCddID0gMDsgYVsneGluZCddID0gMDsgYVsnaW5kZXgnXT0wOyBmb3IodmFyIG1kcGFyc2VyX2lkeDE9MDttZHBhcnNlcl9pZHgxPDIwMDAwMDttZHBhcnNlcl9pZHgxKyspe2FbJ21lZ2FidWYnXVtNYXRoLmZsb29yKGFbJ2luZGV4J10pXT0wOyBhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoYVsnaW5kZXgnXSldPTA7IGFbJ2luZGV4J109KGFbJ2luZGV4J10rMSk7fSIsImZyYW1lX2Vxc19zdHIiOiJhWyd4bGVuJ109NDQ7IGFbJ3lsZW4nXT00NDsgYVsnZmxlbiddPTEwOyBhWydyZWcwMCddPWRpdigoYVsneGxlbiddKmFbJ3lsZW4nXSksNCk7IGFbJ3JlZzAxJ109ZGl2KGFbJ3JlZzAwJ10sNCk7IGFbJ2RlY19tZWQnXT1wb3coMC45NCwgZGl2KDMwLGFbJ2ZwcyddKSk7IGFbJ2RlY19zbG93J109cG93KDAuOTgsIGRpdigzMCxhWydmcHMnXSkpOyBhWydkZWNfZiddPXBvdygwLjgsIGRpdigzMCxhWydmcHMnXSkpOyBhWydtb25pdG9yJ109YVsnc21vb3RoJ107IGFbJ3EzMCddPWFbJ2RlY19zJ107IGFbJ3Ntb290aCddPU1hdGgubWF4KDEsIChwb3coNiwgZGl2KGFbJ2ZwcyddLDMwKSktMikpOyBhWydpbmQnXT0wOyBhWydzdW0nXT0wOyBhWydhbXAnXT0wLjAxOyBmb3IodmFyIG1kcGFyc2VyX2lkeDI9MDttZHBhcnNlcl9pZHgyPGFbJ3JlZzAxJ107bWRwYXJzZXJfaWR4MisrKXthWydzdW0nXT0oYVsnc3VtJ10rZGl2KGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoYVsnaW5kJ10rMzAwMDApKV0sYVsncmVnMDEnXSkpOyBhWydhbXAnXT0oYVsnYW1wJ10rcG93KGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoYVsnaW5kJ10rMzAwMDApKV0sIDIpKTsgYVsnaW5kJ109KGFbJ2luZCddKzEpO30gYVsnaW5kJ109MDsgYVsnYW1wXyddPSgoYVsnYW1wXyddKmFbJ2RlY19tZWQnXSkrKGRpdigoKDEtYVsnZGVjX21lZCddKSpzcXJ0KGFbJ2FtcCddKSksYVsncmVnMDEnXSkqNjAwKSk7IGZvcih2YXIgbWRwYXJzZXJfaWR4Mz0wO21kcGFyc2VyX2lkeDM8YVsncmVnMDEnXTttZHBhcnNlcl9pZHgzKyspe2FbJ21lZ2FidWYnXVtNYXRoLmZsb29yKChhWydpbmQnXSszMDAwMCkpXT1kaXYoKGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoYVsnaW5kJ10rMzAwMDApKV0tYVsnc3VtJ10pLGFbJ2FtcF8nXSk7IGFbJ2luZCddPShhWydpbmQnXSsxKTt9IGFbJ2luZGV4MiddPTA7IGZvcih2YXIgbWRwYXJzZXJfaWR4ND0wO21kcGFyc2VyX2lkeDQ8YVsnZmxlbiddO21kcGFyc2VyX2lkeDQrKyl7YVsnaW5kZXgnXT0wOyBhWydyZWFsJ109MDsgYVsnaW1hZyddPTA7IGZvcih2YXIgbWRwYXJzZXJfaWR4NT0wO21kcGFyc2VyX2lkeDU8YVsnZmxlbiddO21kcGFyc2VyX2lkeDUrKyl7YVsncmVhbCddPShhWydyZWFsJ10rKE1hdGguY29zKCgoZGl2KGFbJ2luZGV4J10sYVsnZmxlbiddKSo2LjI4KSphWydpbmRleDInXSkpKmFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKChkaXYoKGFbJ2luZGV4J10qYVsncmVnMDEnXSksOCkrMzAwMDIpKV0pKTsgYVsnaW1hZyddPShhWydpbWFnJ10rKE1hdGguc2luKCgoZGl2KGFbJ2luZGV4J10sYVsnZmxlbiddKSo2LjI4KSphWydpbmRleDInXSkpKmFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKChkaXYoKGFbJ2luZGV4J10qYVsncmVnMDEnXSksOCkrMzAwMDIpKV0pKTsgYVsnaW5kZXgnXT0oYVsnaW5kZXgnXSsxKTt9IGFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxMDAwMCthWydpbmRleDInXSkpXT0oKGFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKCgxMDAwMCthWydpbmRleDInXSkpXSphWydkZWNfZiddKSthWydyZWFsJ10pOyBhWydtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTUwMDArYVsnaW5kZXgyJ10pKV09KChhWydtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTUwMDArYVsnaW5kZXgyJ10pKV0qYVsnZGVjX2YnXSkrYVsnaW1hZyddKTsgYVsnaW5kZXgyJ109KGFbJ2luZGV4MiddKzEpO30gYVsnaW5kJ109MTsgZm9yKHZhciBtZHBhcnNlcl9pZHg2PTA7bWRwYXJzZXJfaWR4NjxkaXYoYVsnZmxlbiddLDIpO21kcGFyc2VyX2lkeDYrKyl7YVsnY3gnXT1hWydtZWdhYnVmJ11bTWF0aC5mbG9vcigoMTAwMDArYVsnaW5kJ10pKV07IGFbJ2N5J109YVsnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDE1MDAwK2FbJ2luZCddKSldOyBhWyd5aW5kJ109LTE7IGZvcih2YXIgbWRwYXJzZXJfaWR4Nz0wO21kcGFyc2VyX2lkeDc8MzttZHBhcnNlcl9pZHg3Kyspe2FbJ3hpbmQnXT0tMTsgZm9yKHZhciBtZHBhcnNlcl9pZHg4PTA7bWRwYXJzZXJfaWR4ODwzO21kcGFyc2VyX2lkeDgrKyl7YVsnb3gnXT1tb2QoKCgoYVsnY3gnXSswLjUpKmFbJ3hsZW4nXSkrYVsneGluZCddKSxhWyd4bGVuJ10pOyBhWydveSddPW1vZCgoKChhWydjeSddKzAuNSkqYVsneWxlbiddKSthWyd5aW5kJ10pLGFbJ3lsZW4nXSk7IGFbJ2FtcCddPSgoYVsnY3gnXSphWydjeCddKSsoYVsnY3knXSphWydjeSddKSk7IGFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKCgoYVsnb3knXSphWyd5bGVuJ10pK2FbJ294J10pKV09KGFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKCgoYVsnb3knXSphWyd5bGVuJ10pK2FbJ294J10pKV0tZGl2KCgoZGl2KCgyKjMwKSxhWydmcHMnXSkqc3FydChhWydhbXAnXSkpKmFib3ZlKGFbJ2FtcCddLCAwLjAyKSksKCgxKyhhWyd4aW5kJ10qYVsneGluZCddKSkrKGFbJ3lpbmQnXSphWyd5aW5kJ10pKSkpOyBhWyd4aW5kJ109KGFbJ3hpbmQnXSsxKTt9IGFbJ3lpbmQnXT0oYVsneWluZCddKzEpO30gYVsnaW5kJ109KGFbJ2luZCddKzEpO30gYVsneWluZCddPTA7IGZvcih2YXIgbWRwYXJzZXJfaWR4OT0wO21kcGFyc2VyX2lkeDk8YVsneWxlbiddO21kcGFyc2VyX2lkeDkrKyl7YVsneGluZCddPTA7IGZvcih2YXIgbWRwYXJzZXJfaWR4MTA9MDttZHBhcnNlcl9pZHgxMDxhWyd4bGVuJ107bWRwYXJzZXJfaWR4MTArKyl7YVsnbWVnYWJ1ZiddW01hdGguZmxvb3IoKCgoYVsneWluZCddKmFbJ3lsZW4nXSkrYVsneGluZCddKSs1MDAwKSldPShhWydkZWNfbWVkJ10qKGRpdigoKCgoYVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgoYVsneWluZCddKmFbJ3lsZW4nXSkrbW9kKChhWyd4aW5kJ10rMSksYVsneGxlbiddKSkpXSthWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKChhWyd5aW5kJ10qYVsneWxlbiddKSttb2QoKChhWyd4bGVuJ10rYVsneGluZCddKS0xKSxhWyd4bGVuJ10pKSldKSthWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKChtb2QoKGFbJ3lpbmQnXSsxKSxhWyd5bGVuJ10pKmFbJ3lsZW4nXSkrYVsneGluZCddKSldKSthWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKChtb2QoKChhWyd5aW5kJ10rYVsneWxlbiddKS0xKSxhWyd5bGVuJ10pKmFbJ3lsZW4nXSkrYVsneGluZCddKSldKSsoKGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoKGFbJ3lpbmQnXSphWyd5bGVuJ10pK2FbJ3hpbmQnXSkpXSphWydzbW9vdGgnXSkqNCkpLCgyKygyKmFbJ3Ntb290aCddKSkpLWFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKCgoYVsneWluZCddKmFbJ3lsZW4nXSkrYVsneGluZCddKSldKSk7IGFbJ3hpbmQnXT0oYVsneGluZCddKzEpO30gYVsneWluZCddPShhWyd5aW5kJ10rMSk7fSBhWyd6YW5nJ109KC0wLjIqTWF0aC5zaW4oZGl2KGFbJ3RpbWUnXSw5KSkpOyBhWyd4YW5nJ109KC0wLjUtKDAuMipNYXRoLnNpbihkaXYoYVsndGltZSddLDYpKSkpOyBhWyd5YW5nJ109ZGl2KGFbJ3RpbWUnXSw0KTsgYVsncTEnXT1NYXRoLmNvcyhhWyd4YW5nJ10pOyBhWydxMiddPU1hdGguc2luKGFbJ3hhbmcnXSk7IGFbJ3EzJ109TWF0aC5jb3MoYVsneWFuZyddKTsgYVsncTQnXT1NYXRoLnNpbihhWyd5YW5nJ10pOyBhWydxNSddPU1hdGguY29zKGFbJ3phbmcnXSk7IGFbJ3E2J109TWF0aC5zaW4oYVsnemFuZyddKTsgYVsnZm92J109MC44OyBhWyd5aW5kJ109MDsgZm9yKHZhciBtZHBhcnNlcl9pZHgxMT0wO21kcGFyc2VyX2lkeDExPGFbJ3lsZW4nXTttZHBhcnNlcl9pZHgxMSsrKXthWyd4aW5kJ109MDsgZm9yKHZhciBtZHBhcnNlcl9pZHgxMj0wO21kcGFyc2VyX2lkeDEyPGFbJ3hsZW4nXTttZHBhcnNlcl9pZHgxMisrKXthWydpbmQnXT0oKGFbJ3lpbmQnXSphWyd5bGVuJ10pK2FbJ3hpbmQnXSk7IGFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKGFbJ2luZCddKV09YVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKGFbJ2luZCddKV07IGFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcihhWydpbmQnXSldPWFbJ21lZ2FidWYnXVtNYXRoLmZsb29yKChhWydpbmQnXSs1MDAwKSldOyBhWydveiddPSgoYVsneWluZCddLWRpdihhWyd5bGVuJ10sMikpKyhNYXRoLnNpbigoYVsndGltZSddKjIpKSowKSk7IGFbJ294J109KChNYXRoLmFicyhibm90KG1vZChhWyd5aW5kJ10sMikpKT4wLjAwMDAxKT8oYVsneGluZCddKTooKChhWyd4bGVuJ10tYVsneGluZCddKS0xKSkpOyBhWydveSddPWFbJ2dtZWdhYnVmJ11bTWF0aC5mbG9vcigoKGFbJ3lpbmQnXSphWyd5bGVuJ10pK2FbJ294J10pKV07IGFbJ295MCddPWFbJ295J107IGFbJ294J109KGFbJ294J10tZGl2KGFbJ3hsZW4nXSwyKSk7IGFbJ214J109KChhWydveCddKmFbJ3E1J10pLShhWydveSddKmFbJ3E2J10pKTsgYVsnbXknXT0oKGFbJ294J10qYVsncTYnXSkrKGFbJ295J10qYVsncTUnXSkpOyBhWydveCddPWFbJ214J107IGFbJ295J109YVsnbXknXTsgYVsnbXgnXT0oKGFbJ294J10qYVsncTMnXSkrKGFbJ296J10qYVsncTQnXSkpOyBhWydteiddPSgoLWFbJ294J10qYVsncTQnXSkrKGFbJ296J10qYVsncTMnXSkpOyBhWydveCddPWFbJ214J107IGFbJ296J109YVsnbXonXTsgYVsnbXknXT0oKGFbJ295J10qYVsncTEnXSktKGFbJ296J10qYVsncTInXSkpOyBhWydteiddPSgoYVsnb3knXSphWydxMiddKSsoYVsnb3onXSphWydxMSddKSk7IGFbJ295J109YVsnbXknXTsgYVsnb3onXT1hWydteiddOyBhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDEwMDAwK2FbJ2luZCddKSldPShkaXYoKGFbJ2ZvdiddKmFbJ294J10pLChhWydveiddKyg2MCphWydmb3YnXSkpKSswLjUpOyBhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDE1MDAwK2FbJ2luZCddKSldPShkaXYoKGFbJ2ZvdiddKmFbJ295J10pLChhWydveiddKyg2MCphWydmb3YnXSkpKSswLjYpOyBhWydnbWVnYWJ1ZiddW01hdGguZmxvb3IoKDIwMDAwK2FbJ2luZCddKSldPShNYXRoLm1heChNYXRoLm1pbigoMC41K2RpdihhWydveTAnXSw0KSksIDEpLCAwKSoxKTsgYVsnZ21lZ2FidWYnXVtNYXRoLmZsb29yKCgyNTAwMCthWydpbmQnXSkpXT0oZGl2KGFbJ295MCddLDE2KSswLjUpOyBhWyd4aW5kJ109KGFbJ3hpbmQnXSsxKTt9IGFbJ3lpbmQnXT0oYVsneWluZCddKzEpO30gYVsncTMyJ109YVsnYXNwZWN0eSddOyIsInBpeGVsX2Vxc19zdHIiOiJhWydyb3QnXT0wOyBhWyd6b29tJ109MTsgYVsnd2FycCddPTA7IiwiYmFzZVZhbHMiOnsicmF0aW5nIjo0LCJnYW1tYWFkaiI6MS45OCwiZGVjYXkiOjAuNSwiZWNob196b29tIjoxLCJlY2hvX2FscGhhIjowLjUsImVjaG9fb3JpZW50IjozLCJ3YXZlX21vZGUiOjQsImFkZGl0aXZld2F2ZSI6MSwid2F2ZV90aGljayI6MSwibW9kd2F2ZWFscGhhYnl2b2x1bWUiOjEsIndhdmVfYnJpZ2h0ZW4iOjAsImRhcmtlbiI6MSwid2F2ZV9hIjowLjAwMSwid2F2ZV9zY2FsZSI6MC41MjcsIndhdmVfc21vb3RoaW5nIjowLjQ1LCJtb2R3YXZlYWxwaGFzdGFydCI6MCwibW9kd2F2ZWFscGhhZW5kIjoxLjMyLCJ3YXJwYW5pbXNwZWVkIjoxLjQ1OSwid2FycHNjYWxlIjoyLjAwNywiem9vbSI6MC45OTk5LCJ3YXJwIjowLjAxLCJzeCI6MC45OTk5LCJ3YXZlX3IiOjAuOCwid2F2ZV9nIjowLjQ5LCJvYl9hIjoxLCJpYl9zaXplIjowLjI2LCJtdl94Ijo2NCwibXZfeSI6NDgsIm12X2wiOjEuODUsIm12X3IiOjAuNSwibXZfZyI6MC41LCJtdl9iIjowLjUsIm12X2EiOjAsImIyeCI6MC4zLCJiMWVkIjowfSwid2FycCI6IiBzaGFkZXJfYm9keSB7IFxuICB2ZWM0IHRtcHZhcl8xO1xuICB0bXB2YXJfMS53ID0gMS4wO1xuICB0bXB2YXJfMS54eXogPSB2ZWMzKDAuMCwgMC4wLCAwLjApO1xuICByZXQgPSB0bXB2YXJfMS54eXo7XG4gfSIsImNvbXAiOiIgc2hhZGVyX2JvZHkgeyBcbiAgdmVjMyByZXRfMTtcbiAgdmVjMiB0bXB2YXJfMjtcbiAgdG1wdmFyXzIueCA9IHV2Lng7XG4gIHRtcHZhcl8yLnkgPSAodXYueSAtIDAuMyk7XG4gIHJldF8xID0gKG1peCAodGV4dHVyZSAoc2FtcGxlcl9tYWluLCB1dikueHl6LCAoMi4wICogXG4gICAgKCh0ZXh0dXJlIChzYW1wbGVyX2JsdXIxLCB1dikueHl6ICogc2NhbGUxKSArIGJpYXMxKVxuICApLCB2ZWMzKDAuNCwgMC40LCAwLjQpKSAqIDEuNSk7XG4gIHJldF8xID0gKHJldF8xICsgKChcbiAgICAoKGNsYW1wICgxLjAsIDAuMCwgMS4wKSAqIGNsYW1wICgoMS4wIC0gXG4gICAgICBkb3QgKHJldF8xLCB2ZWMzKDAuMzIsIDAuNDksIDAuMjkpKVxuICAgICksIDAuMCwgMS4wKSkgKiAoMS4wIC0gKGRvdCAoXG4gICAgICAoKHRleHR1cmUgKHNhbXBsZXJfYmx1cjIsIGZyYWN0KHRtcHZhcl8yKSkueHl6ICogc2NhbGUyKSArIGJpYXMyKVxuICAgICwgdmVjMygwLjMyLCAwLjQ5LCAwLjI5KSkgKiAzLjApKSlcbiAgICogMC4yKSAqIHV2LnkpKTtcbiAgdmVjNCB0bXB2YXJfMztcbiAgdG1wdmFyXzMudyA9IDEuMDtcbiAgdG1wdmFyXzMueHl6ID0gcmV0XzE7XG4gIHJldCA9IHRtcHZhcl8zLnh5ejtcbiB9In0="))}
        Object.assign(presets, sets)
        //*/

        presets = _(presets).toPairs().sortBy(([k, v]) => k.toLowerCase()).fromPairs().value();
        presetKeys = _.keys(presets);
        presetIndex = Math.floor(Math.random() * presetKeys.length);

        var presetSelect = document.getElementById('presetSelect');
        for(var i = 0; i < presetKeys.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = presetKeys[i].substring(0,60) + (presetKeys[i].length > 60 ? '...' : '');
            opt.value = i;
            presetSelect.appendChild(opt);
        }
        psets = presets;

        visualizer = butterchurn.createVisualizer(audioContext, canvas , {
          width: 1280,
          height: 720,
          pixelRatio: window.devicePixelRatio || 1,
          textureRatio: 1,
        });
        //nextPreset(0);
        //cycleInterval = setInterval(() => {if($("#presetCycle").checked) nextPreset(2.7)}, presetCycleLength);
        if (!rendering) {
          rendering = true;
          startRenderer();
          visualizer.loadPreset(psets['turbulence'], 1);
          
/*try {
audio.play();
}
catch(e) {
	$("body").click(()=> {
		audio.play();
	});
}*/

          //visualizer.loadPreset(psets['laser palace'], 1);
          //$("#canvas").css('display', 'block');
        }

        sourceNode = audioContext.createMediaElementSource(document.querySelector("video"));
        //sourceNode.buffer = buffer;
        connectToAudioAnalyzer(sourceNode);
        
      }

      document.addEventListener('DOMContentLoaded', function(){
  var v = document.getElementById('v');
  var canvas = document.getElementById('c');
  var context = canvas.getContext('2d');
 
  var cw = Math.floor(canvas.clientWidth / 100);
  var ch = Math.floor(canvas.clientHeight / 100);
  canvas.width = cw;
  canvas.height = ch;
 
  v.addEventListener('play', function(){
    draw(this,context,cw,ch);
  },false);
 
},false);
 
function draw(v,c,w,h) {
  if(v.paused || v.ended) return false;
  c.drawImage(v,0,0,w,h);
  setTimeout(draw,20,v,c,w,h);
}

      initPlayer();

    var startt = 18.8,
        last = 0,
        all = 0,
        now = 0,
        old = 0,
        i=0;



/* 
   Loop over the articles, read the timestamp start and end and store 
   them in an array

    $('article').each(function(o){
      if($(this).attr('data-start')){
        timestamps.push({
          start : +$(this).attr('data-start'),
          end : +$(this).attr('data-end'),
          elm : $(this)
        });
      }
    });

    all = timestamps.length;
      /* 
  when the video is playing, round up the time to seconds and call the 
  showsection function continuously
*/
    
      
      
      
      /*$('video').bind('timeupdate',function(event){
      now = parseInt(this.currentTime);


      if(now > old){
        showsection(now);
      }
      old = now;

    });*/

/*
  Test whether the current time is within the range of any of the 
  defined timestamps and show the appropriate section.
  Hide all others.
*/

    function showsection(t){
      //for(i=0;i<all;i++){
        if(t >= startt ){ //&& t <= timestamps[i].end){
          $("#canvas").css('visibility', 'visible');
        } else {
         console.log(t);
          //timestamps[i].elm.removeClass('vis');
        }
      //}
    };
    });
  
