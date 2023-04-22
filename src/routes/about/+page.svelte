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
      ClickableTile,
      UnorderedList,
      ListItem,
      Link 
    } from "carbon-components-svelte";
    
    import "carbon-components-svelte/css/g80.css";

    let isSideNavOpen = false;
  </script>
<Content>
    <Grid>
      <Row>
        <Column>
          <h1>About This Project</h1>
          <p>We are a team of 3 students from the Georgia Institute of Technology. We embarked on this project with Budget Collector to examine the changing of color throughout history. Follow our journey with our blog post to read more about our process.  </p>
        </Column>
      </Row>
      <br/>
      <br/>
      <Row>
        <Column aspectRatio="2x1">
            <ClickableTile href="https://www.budgetcollector.org/2023/02/24/making-art-smarter/" target="_blank" class="ctile">
                <img width=50% src="https://i0.wp.com/www.budgetcollector.org/wp-content/uploads/2023/02/AI-Art-Advisor1-3.png?w=1400&ssl=1" alt="Article 1 hero" class="center"/>
                <h2>First Article</h2>
                <br />
                <br />
                This is our first article that talks about how we started on our journey and our plans on how to tackle this project.
                <br/>
                <br/>
            </ClickableTile>
            
        </Column>
        <Column aspectRatio="2x1">
            <ClickableTile href="https://www.budgetcollector.org/2023/04/12/uncovering-deep-connections-between-color-changes-and-global-art-movements/" target="_blank">
                <img width=50% src="https://i0.wp.com/www.budgetcollector.org/wp-content/uploads/2023/01/AI-Art-Advisor1.png?w=1400&ssl=1" alt="Georgia Tech Logo" class="center"/>
                <h2>Second Article</h2>
                <br />
                <br />
                This article talks about our findings and how we solved the issues that we found along the way.                      

                <br/>
                <br/>
                <br>
            </ClickableTile>
            
        </Column>
      </Row>
      <br/>

      <Row>
        <Column>
          <h1>Source</h1>
          <p>We use WikiArt and WikiArt Emotions. Both of these are linked below. Also, for our code, please visit the github link to the backend and check out our articles to see who inspired our ideas on how to visualize these datasets. </p>

          <br/>
          <br/>
          <UnorderedList>
            <ListItem>
              <Link href="https://www.wikiart.org/">
                WikiArt
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://saifmohammad.com/WebPages/wikiartemotions.html">
                WikiArt Emotions
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/luish910/spring23_bc_practicum">
                Github
              </Link>
            </ListItem>
          </UnorderedList>
        </Column>
      </Row>
    </Grid>
  </Content>

  <style>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        }

  </style>