# Flamegraph for Looker

Flame graphs are used to visualise hierarchical data. This implementation for Looker was built using the [D3.js plugin](https://github.com/spiermar/d3-flame-graph).

If you don't know what flame graphs are, check [Brendan Gregg's post](http://www.brendangregg.com/flamegraphs.html).


## Example
Here's an example of analysing Redshift's Query Plan Costs within Looker (this is included in the the [Redshift Performance Optimization Block](https://discourse.looker.com/t/analytic-block-redshift-performance-optimization/4110)):
![Screenshot](https://github.com/davidtamaki/flamegraph/blob/master/screen-shots/flamegraph_example.gif)


## Implementation Instructions
1. Fork this repository

2. Turn on [GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

3. Follow directions on Looker's documentation to add a [new custom visualisation manifest](https://docs.looker.com/admin-options/platform/visualizations#adding_a_new_custom_visualization_manifest):
    - In the 'Main' field, the URI of the visualization will be `https://DOMAIN_NAME/flamegraph/flamegraph.js`. For example: https://davidtamaki.github.io/flamegraph/flamegraph.js
    - The required dependencies are:
      - [d3](https://d3js.org/d3.v4.min.js)
      - [d3-tip](https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.9.1/d3-tip.min.js)
      - [d3-flamegraph](https://cdn.jsdelivr.net/gh/spiermar/d3-flame-graph@2.0.3/dist/d3-flamegraph.min.js)
      
