<script>
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

    let isSideNavOpen = false;
    //export const ssr = false;
  </script>
  
  <Header company="Budget Collector" platformName="Color Explorer" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Home" />
      <HeaderNavItem href="/#colorhistory" text="History" />
      <HeaderNavItem href="/#colors" text="Colors" />
      <HeaderNavItem href="/about" text="About" />
    </HeaderNav>
  </Header>
  
  <slot/>
