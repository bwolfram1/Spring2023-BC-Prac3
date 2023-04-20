<script>
    import { onMount } from 'svelte'
    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      HeaderNavMenu,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";

    import "carbon-components-svelte/css/g80.css";
    //import '@carbon/styles/css/styles.css';
    import '@carbon/charts/styles.css';
    import { LayerCake, Svg, Html } from 'layercake';
    import { scaleOrdinal, scaleBand } from 'd3-scale';
    import CirclePack from './_components/CirclePack.html.svelte';
    import Tooltip from "./_components/Tooltip.html.svelte";
    import AxisX from './_components/AxisX.svelte';
  	import Beeswarm from './_components/BeeswarmForce.svelte';
    import { chart } from "svelte-apexcharts";

    let region_counts = [];
    let region_data = [];
    let fetchvalues =[];
    let values = [];
    let year_from = "1400";
    let year_to = "2020";
    let movement = "";
    onMount(async () => {
      const response1 = await fetch('https://spring23-bc-group6.onrender.com/region?year_from=1400&year_to=2020')
      region_counts = await response1.json()
      //console.log(region_counts)
    })

    //onMount(async () => {
    //  const response2 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Europe')
    //  movementEurope = await response2.json()
      //europeMoves = movementEurope.find()
      //console.log(movementEurope.color1)
    //})
    
    

    const idKey = 'region';
    const valueKey = 'count';

    const xKey = 'year';
  	const zKey = 'color1';
  	const titleKey = 'artist';
  	const pKey = "title";
    const mKey = 'movement';
    const imgKey = 'img_path';
    const sidKey = 'id';
    const rgKey = 'region';
    const urlKey = 'url';
    const cfKey = 'colorfulness';
    const rKey = 'rating';
    const stKey = 'sentiment';
    const sKey = 'style';
    const p1Key = 'prop1';
    let evt;
    let region = "";
    let hideTooltip = true;


    $: selected_region = region;
	  $: selected_movement = movement;

    const r = 8;
	  let filteredPaintings = []

    $: searchPaintings = () => {
      console.log('region: ',selected_region)
      console.log('movement: ', selected_movement)
      return filteredPaintings = paintings.filter(function (d) { 
                    return d.region == selected_region
                    && d.movement == selected_movement
                    ; });
                    
        
    }   
    
    $: seriesNames = new Set();
    $: dataTransformed = filteredPaintings.map(d => {
        seriesNames.add(d[zKey]);
      return {
      [titleKey]: d[titleKey],
      [zKey]: d[zKey],
      [rgKey]: d[rgKey],
      [xKey]: +d[xKey],
      [pKey]: d[pKey],
      [mKey]: d[mKey],
      [imgKey]: d[imgKey],
      [sidKey]: d[sidKey],
      [urlKey]: d[urlKey],
      [cfKey]: d[cfKey],
      [rKey]: d[rKey],
      [stKey]: d[stKey],
      [sKey]: d[sKey],
      [p1Key]: d[p1Key]
      }
      })
    let options = {
          series: [],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 350,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                console.log(opts)
            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime',
          label: {
            style: {
              colors: 'white'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        
},
        theme: {
          mode: 'dark'
        }   
  };

    //onMount(() => {
    //  getFetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Europe').then((res) => {
    //    fetchvalues = res;
    //    movementEurope = fetchvalues.map((val) => {
    //     return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    //    });
    //    console.log(movementEurope)
    //    options.series.data = movementEurope
    //  })
    //})
    export let data
    const {europe} = data
    const {africa} = data
    const {middleEast} = data
    const {americas} = data
    const {asiaOceania} = data
    const {paintings} = data;
	  const {regions} = data;

    const movementEurope = europe.map((val) =>{
      return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    })

    const movementAfrica = africa.map((val) =>{
      return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    })

    const movementMiddleEast = middleEast.map((val) =>{
      return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    })

    const movementAmericas = americas.map((val) =>{
      return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    })

    const movementAsiaOceania = asiaOceania.map((val) =>{
      return {x: val.movement, y: [new Date(val.y[0].toString()).getTime(), new Date(val.y[1].toString()).getTime()],fillColor: val.color1}
    })
    function handleClick(event) {
        console.log(event.detail.props.data.data)
        region = event.detail.props.data.data.region
        movement = "";
    }

    let europeOptions = {
          series: [{
            data: movementEurope
          }],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 500,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                //console.log(opts.dataPointIndex)
                //console.log(chart.data.twoDSeriesX[opts.dataPointIndex])
                movement = chart.data.twoDSeriesX[opts.dataPointIndex]
                selected_movement = movement
                searchPaintings()
            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime',
          label: {
            style: {
              colors: 'white'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        
},
        theme: {
          mode: 'dark'
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
        }    
  };
  let africaOptions = {
          series: [{
            data: movementAfrica
          }],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 500,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                console.log(opts.dataPointIndex)
                console.log(chart.data.twoDSeriesX[opts.dataPointIndex])
                movement = chart.data.twoDSeriesX[opts.dataPointIndex]
                selected_movement = movement
                searchPaintings()
            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime',
          label: {
            style: {
              colors: 'white'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        
},
        theme: {
          mode: 'dark'
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
        }      
  };

  let middleEastOptions = {
          series: [{
            data: movementMiddleEast
          }],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 500,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                console.log(opts.dataPointIndex)
                console.log(chart.data.twoDSeriesX[opts.dataPointIndex])
                movement = chart.data.twoDSeriesX[opts.dataPointIndex]
                selected_movement = movement
                searchPaintings()
            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime',
          label: {
            style: {
              colors: 'white'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        
},
          theme: {
          mode: 'dark'
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
        }        
  };

  let americasOptions = {
          series: [{
            data: movementAmericas
          }],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 500,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                console.log(opts.dataPointIndex)
                console.log(chart.data.twoDSeriesX[opts.dataPointIndex])
                movement = chart.data.twoDSeriesX[opts.dataPointIndex]
                selected_movement = movement
                searchPaintings()
            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime',
          label: {
            style: {
              colors: 'white'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white'
            }
          }
        
},
        theme: {
          mode: 'dark'
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
        }      
  };

  let asianOceaniaOptions = {
          series: [{
            data: movementAsiaOceania
          }],
          noData: {
            text: 'Please make a selection in the chart above...',
            style: {
              color: 'white'
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            brush: {
              enabled: false
            },
          height: 500,
          background: '#393939',
          type: 'rangeBar',
          events: {
            click: function(e, chart, opts) {
                console.log(opts.dataPointIndex)
                console.log(chart.data.twoDSeriesX[opts.dataPointIndex])
                movement = chart.data.twoDSeriesX[opts.dataPointIndex]
                selected_movement = movement
                searchPaintings()

            }
        }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(val, opts) {
            //var label = opts.w.globals.colors[opts.dataPointIndex]
            //var label = opts.w.globals.labels[opts.dataPointIndex]
            //console.log(opts)
            //console.log(opts.dataPointIndex)
            //console.log(label)
            var label = ""
            return label
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: "desaturate"
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1
                }
            }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          lines: {
            show: false
          },
          labels: {
            style: {
              colors: 'white'
            }
          }
        
        },
        theme: {
          mode: 'dark'
        },
        tooltip: {
          x: {
            format: 'yyyy',
          },
                  
}
  };

</script>
<Content>
  <Grid>
    
    <Row>
      <Column>
        <h1>
          Color Throughout History
        </h1>
        <p>
          The following graph shows the the sample size of the paintings in each region.
        </p>

      </Column>
    </Row> 
    <Row>
      <Column>
        <h2> Art by Region</h2>
            
            <div class="chart-container">
                <LayerCake
                    padding={{ top: 0, bottom: 20, left: 30 }}
                    data={region_counts}
                >
                <Html>
                    <a href="#colorhistory">
                    <CirclePack
                      idKey={idKey}
                      valueKey={valueKey}
                      stroke='#000'
                      textColor='#000'
                      textStroke='#fff'
                      textStrokeWidth={1}
                      on:mousedown={event => handleClick(event)}
                    />
                    </a>
                  </Html>
                    
                </LayerCake>
            </div>
      </Column>
      
    </Row>
    <div id="colorhistory"></div>
    <Row></Row>
    <Row>
      <Column>
        <div>
        <h1>
          Primary color in the movements
        </h1>
        <p>
          The following visualization will show the primary color used in 5 year increments based on the region you selected. Once you select a region, you can also select a movement explore further. 
        </p>
        
        
        {#if region === 'Europe'}
          <div use:chart={europeOptions} />
        {:else if region === 'MiddleEast'}
          <div use:chart={middleEastOptions} />
        {:else if region === 'Africa'}
          <div use:chart={africaOptions} />
        {:else if region === 'Americas'}
          <div use:chart={americasOptions} />
        {:else if region === 'AsiaOceania'}
          <div use:chart={asianOceaniaOptions} />
        {:else if region === ''}
          <div use:chart={options} />
        {/if}
        </div>
      </Column>
    </Row>
    <Row>
      <Column>
        <div>
          <h1>Explore the art of the movement</h1>
          <p>Use the chart below to explore the artwork of the region and the movement</p>

        
        {region} {movement}
        </div> 
        Showing paintings from {selected_region} - movement  {selected_movement} !

        {#key dataTransformed}
        <div class='bee-container'>
          <LayerCake
          padding={{bottom: 15, top: 50, left: 100, right: 100}}
          x={xKey}
          z={zKey}
          zScale={scaleOrdinal()}
          zDomain={Array.from(seriesNames)}
          zRange={seriesNames}
          data={dataTransformed}
          let:width
          >
          
          <Svg>
            <AxisX/>
            <Beeswarm
            r={width < 300 ? r / 1.2 : r}
            strokeWidth={1}
            xStrength={0.95}
            yStrength={0.075}
            getTitle={d => d[titleKey]}
            on:mousemove={event => evt = hideTooltip = event}
            on:mouseout={() => (hideTooltip = true)}		  	  
            />
          </Svg>
          
            {#if hideTooltip !== true}
            <Tooltip
            {evt}
            let:detail>
              {@const tooltipData = { ...detail.props }}
              <div class="row">
                <div class="column">
                  <img src={tooltipData.img_path} alt="alt" />
                </div>
                <div class="column">
                  <div class="row"><b>Title:</b> {tooltipData.title} ({tooltipData.year})</div>
                  <div class="row"><b>Artist:</b> {tooltipData.artist}</div>
                  <div class="row"><b>Region:</b> {tooltipData.region}</div>
                  <div class="row"><b>Dominant Color:</b> {tooltipData.color1}</div>
                  <div class="row"><b>Movement:</b> {tooltipData.movement}</div>
                  <div class="row"><b>Style:</b> {tooltipData.style}</div>
                  <div class="row"><b>Rating:</b> {tooltipData.rating}</div>
                  <div class="row"><b>Colorfulness:</b> {tooltipData.colorfulness}</div>
                  <div class="row"><b>Sentiment:</b> {tooltipData.sentiment}</div>
                  <a href={tooltipData.url}>Image URL (Download)</a>
                </div>  
              </div>
            </Tooltip>

            {/if}  
          </LayerCake>
        </div>
        {/key}
      </Column>
    </Row>
  </Grid>
</Content>


<style>
  .chart-container {
  width: 1500px;
  height: 800px;
}

.bee-container {
  width: 100%;
  height: 800px;
}
</style>