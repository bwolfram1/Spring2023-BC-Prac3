import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, g as add_attribute, i as add_classes, v as validate_component, m as missing_component, e as escape_attribute_value, p as compute_slots } from "../../../chunks/index2.js";
import { C as Content, G as Grid, R as Row, a as Column } from "../../../chunks/Column.js";
import "../../../chunks/g80.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `
${disabled ? `<p${spread([escape_object($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</p>` : `<a${spread(
    [
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</a>`}`;
});
const Link$1 = Link;
const ClickableTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["clicked", "light", "disabled", "href"]);
  let { clicked = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  if ($$props.clicked === void 0 && $$bindings.clicked && clicked !== void 0)
    $$bindings.clicked(clicked);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${validate_component(Link$1, "Link").$$render(
    $$result,
    Object.assign(
      {},
      $$restProps,
      { disabled },
      {
        class: "bx--tile bx--tile--clickable " + (clicked && "bx--tile--is-clicked") + " " + (light && "bx--tile--light") + " " + $$restProps.class
      },
      { href }
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const ClickableTile$1 = ClickableTile;
const UnorderedList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["nested", "expressive"]);
  let { nested = false } = $$props;
  let { expressive = false } = $$props;
  if ($$props.nested === void 0 && $$bindings.nested && nested !== void 0)
    $$bindings.nested(nested);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  return `
<ul${spread([escape_object($$restProps)], {
    classes: "bx--list--unordered " + (nested ? "bx--list--nested" : "") + " " + (expressive ? "bx--list--expressive" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const UnorderedList$1 = UnorderedList;
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<li${spread([escape_object($$restProps)], { classes: "bx--list__item" })}>${slots.default ? slots.default({}) : ``}</li>`;
});
const ListItem$1 = ListItem;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".center.svelte-oqp9di{display:block;margin-left:auto;margin-right:auto;width:50%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                default: () => {
                  return `<h1>About This Project</h1>
          <p>We are a team of 3 students from the Georgia Institute of Technology. We embarked on this project with Budget Collector to examine the changing of color throughout history. Follow our journey with our blog post to read more about our process.  </p>`;
                }
              })}`;
            }
          })}
      <br>
      <br>
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Column, "Column").$$render($$result, { aspectRatio: "2x1" }, {}, {
                default: () => {
                  return `${validate_component(ClickableTile$1, "ClickableTile").$$render(
                    $$result,
                    {
                      href: "https://www.budgetcollector.org/2023/02/24/making-art-smarter/",
                      target: "_blank",
                      class: "ctile"
                    },
                    {},
                    {
                      default: () => {
                        return `<img width="50%" src="https://i0.wp.com/www.budgetcollector.org/wp-content/uploads/2023/02/AI-Art-Advisor1-3.png?w=1400&ssl=1" alt="Article 1 hero" class="center svelte-oqp9di">
                <h2>First Article</h2>
                <br>
                <br>
                This is our first article that talks about how we started on our journey and our plans on how to tackle this project.
                <br>
                <br>`;
                      }
                    }
                  )}`;
                }
              })}
        ${validate_component(Column, "Column").$$render($$result, { aspectRatio: "2x1" }, {}, {
                default: () => {
                  return `${validate_component(ClickableTile$1, "ClickableTile").$$render(
                    $$result,
                    {
                      href: "https://www.budgetcollector.org/2023/04/12/uncovering-deep-connections-between-color-changes-and-global-art-movements/",
                      target: "_blank"
                    },
                    {},
                    {
                      default: () => {
                        return `<img width="50%" src="https://i0.wp.com/www.budgetcollector.org/wp-content/uploads/2023/01/AI-Art-Advisor1.png?w=1400&ssl=1" alt="Georgia Tech Logo" class="center svelte-oqp9di">
                <h2>Second Article</h2>
                <br>
                <br>
                This article talks about our findings and how we solved the issues that we found along the way.                      

                <br>
                <br>
                <br>`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          })}
      <br>

      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                default: () => {
                  return `<h1>Source</h1>
          <p>We use WikiArt and WikiArt Emotions. Both of these are linked below. Also, for our code, please visit the github link to the backend and check out our articles to see who inspired our ideas on how to visualize these datasets. </p>

          <br>
          <br>
          ${validate_component(UnorderedList$1, "UnorderedList").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(ListItem$1, "ListItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Link$1, "Link").$$render($$result, { href: "https://www.wikiart.org/" }, {}, {
                            default: () => {
                              return `WikiArt
              `;
                            }
                          })}`;
                        }
                      })}
            ${validate_component(ListItem$1, "ListItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Link$1, "Link").$$render(
                            $$result,
                            {
                              href: "http://saifmohammad.com/WebPages/wikiartemotions.html"
                            },
                            {},
                            {
                              default: () => {
                                return `WikiArt Emotions
              `;
                              }
                            }
                          )}`;
                        }
                      })}
            ${validate_component(ListItem$1, "ListItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Link$1, "Link").$$render(
                            $$result,
                            {
                              href: "https://github.com/luish910/spring23_bc_practicum"
                            },
                            {},
                            {
                              default: () => {
                                return `Github
              `;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
