//_aqiFeed({  container:"city-aqi-container",  city:"taiwan/nantou"  });

_aqiFeed({
  display:"<div style='%style;text-align:center;height:100vh;'>" +
            "<div style='font-size:8vh;height:5vh;'>%cityname Air Quality Index:</div>" +
            "<div style='font-size:65vh;height:65vh;'>%aqiv</div>" +
            "<div style='font-size:15vh;height:20vh;font-weight:bold'>%impact</div>" +
            "<div style='font-size:5vh;height:5vh;'>Updated on %date</div>" +
          "</div>",
  container:"city-aqi-container",
  city:"taiwan/nantou"
});
