<!--
	@component
	Generates an SVG Beeswarm chart using a [d3-force simulation](https://github.com/d3/d3-force).
 -->
 <script>
	import { getContext, createEventDispatcher } from 'svelte';
	import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';

	const { data, xGet, height, zGet } = getContext('LayerCake');

	const nodes = $data.map((d) => ({ ...d }));

	/** @type {Number} [r=4] – The circle radius size in pixels. */
	export let r = 8; 

	/** @type {Number} [strokeWidth=1] – The circle's stroke width in pixels. */
	export let strokeWidth = 2;

	/** @type {String} [stroke='#fff'] – The circle's stroke color. */
	export let stroke = '#fff';

	/** @type {Number} [xStrength=0.95] – The value passed into the `.strength` method on `forceX`. See [the documentation](https://github.com/d3/d3-force#x_strength). */
	export let xStrength = 0.95;

	/** @type {Number} [yStrength=0.075] – The value passed into the `.strength` method on `forceY`. See [the documentation](https://github.com/d3/d3-force#y_strength). */
	export let yStrength = 0.075;

	/** @type {Function} [getTitle] — An accessor function to get the field on the data element to display as a hover label using a `<title>` tag. */
	export let getTitle = undefined;

    let hideTooltip = false;

    const dispatch = createEventDispatcher();

    function handleMousemove(feature) {
          return function handleMousemoveFn(e) {
              raise(this);
              // When the element gets raised, it flashes 0,0 for a second so skip that
              if (e.layerX !== 0 && e.layerY !== 0) {
                  dispatch("mousemove", { e });
              }
          };
      }

	$: simulation = forceSimulation(nodes)
		.force('x', forceX().x(d => $xGet(d)).strength(xStrength))
		.force('y', forceY().y($height / 2).strength(yStrength))
		.force('collide', forceCollide(r))
		.stop();

	$: {
		for ( let i = 0,
			n = 120;
			// The REPL thinks there is an infinite loop with this next line but it's generally a better way to go
			//n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
			i < n;
			++i ) {
			simulation.tick();
		}
	}
</script>

<g class='bee-group'
    on:mouseout={(e) => dispatch("mouseout")}
    on:blur={(e) => dispatch("mouseout")}
    >
	{#each simulation.nodes() as node}
		<circle
			fill='{$zGet(node)}'
			stroke='{stroke}'
			stroke-width='{strokeWidth}'
			cx='{node.x}'
			cy='{node.y}'
			r='{r}'
            on:mouseover={(e) => dispatch("mousemove", { e, props: node })}
            on:focus={(e) => dispatch("mousemove", { e, props: node })}
            on:mousemove={(e) => handleMousemove(e, node)}
            >
			{#if getTitle}
				<title>{getTitle(node)}</title>
			{/if}
		</circle>
	{/each}
</g>
