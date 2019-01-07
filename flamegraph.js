var vis = {
    id: 'flamegraph',
    label: 'Flamegraph',
    options: {
        color_range: {
            type: 'array',
            label: 'Color Range',
            display: 'colors',
            default: ['#dd3333', '#80ce5d', '#f78131', '#369dc1', '#c572d3', '#36c1b3', '#b57052', '#ed69af']
        },
        diameter: {
            type: "string",
            label: "Diameter",
            default: '100%'
        }

    },

    // Set up the initial state of the visualization
    create: function(element, config) {
        var css = '<style> .d3-flame-graph rect{stroke:#EEE;fill-opacity:.8}.d3-flame-graph rect:hover{stroke:#474747;stroke-width:.5;cursor:pointer}.d3-flame-graph-label{pointer-events:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12px;font-family:Verdana;margin-left:4px;margin-right:4px;line-height:1.5;padding:0;font-weight:400;color:#000;text-align:left}.d3-flame-graph .fade{opacity:.6!important}.d3-flame-graph .title{font-size:20px;font-family:Verdana}.d3-flame-graph-tip{line-height:1;font-family:Verdana;font-size:12px;padding:12px;background:rgba(0,0,0,.8);color:#fff;border-radius:2px;pointer-events:none}.d3-flame-graph-tip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgba(0,0,0,.8);position:absolute;pointer-events:none}.d3-flame-graph-tip.n:after{content:"\25BC";margin:-1px 0 0;top:100%;left:0;text-align:center}.d3-flame-graph-tip.e:after{content:"\25C0";margin:-4px 0 0;top:50%;left:-8px}.d3-flame-graph-tip.s:after{content:"\25B2";margin:0 0 1px;top:-8px;left:0;text-align:center}.d3-flame-graph-tip.w:after{content:"\25B6";margin:-4px 0 0 -1px;top:50%;left:100%} </style> ';
        element.innerHTML=css;
        container = element.appendChild(document.createElement("div"));
        this.container=container
        container.setAttribute("id","my-flamegraph");
        container.classList.add("d3-flame-graph");
    },


    // Render in response to the data or settings changing
    update: function(data, element, config, queryResponse) {
        // this.svg = d3.select("#my-flamegraph svg").append("svg")
        //     .html('')
        //     .attr('width', '100%')
        //     .attr('height', element.clientHeight);
        // console.log(this.svg);

///////////////////////////////////////////////////////////////////// temp /////////////////////////////////////////////////////////

        console.log(data);
        console.log(queryResponse);
        // data = [{
        //             "redshift_plan_steps.parent_step": 0,
        //             "redshift_plan_steps.step": 1,
        //             "redshift_plan_steps.operation": "Limit",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 1,
        //             "redshift_plan_steps.step": 2,
        //             "redshift_plan_steps.operation": "Merge",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 2,
        //             "redshift_plan_steps.step": 3,
        //             "redshift_plan_steps.operation": "Network",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 3,
        //             "redshift_plan_steps.step": 4,
        //             "redshift_plan_steps.operation": "Sort",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 4,
        //             "redshift_plan_steps.step": 5,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 5,
        //             "redshift_plan_steps.step": 6,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 102
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 6,
        //             "redshift_plan_steps.step": 7,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 106
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 6,
        //             "redshift_plan_steps.step": 43,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 7,
        //             "redshift_plan_steps.step": 8,
        //             "redshift_plan_steps.operation": "Hash Right Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_DIST_OUTER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 14373758
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 7,
        //             "redshift_plan_steps.step": 29,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 68
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 8,
        //             "redshift_plan_steps.step": 10,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 7470310
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 8,
        //             "redshift_plan_steps.step": 9,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "check_project",
        //             "redshift_plan_steps.total_bytes": 67338380
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 10,
        //             "redshift_plan_steps.step": 11,
        //             "redshift_plan_steps.operation": "Hash Right Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_DIST_BOTH",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 7470310
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 11,
        //             "redshift_plan_steps.step": 21,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 584940
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 11,
        //             "redshift_plan_steps.step": 12,
        //             "redshift_plan_steps.operation": "Subquery Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 213421800
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 12,
        //             "redshift_plan_steps.step": 13,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 1894118475
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 13,
        //             "redshift_plan_steps.step": 14,
        //             "redshift_plan_steps.operation": "Hash Left Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_DIST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 1894118475
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 14,
        //             "redshift_plan_steps.step": 19,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 171913812
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 14,
        //             "redshift_plan_steps.step": 15,
        //             "redshift_plan_steps.operation": "Hash Left Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_DIST_BOTH",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 975684954
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 15,
        //             "redshift_plan_steps.step": 17,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 179574552
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 15,
        //             "redshift_plan_steps.step": 16,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "check_connection",
        //             "redshift_plan_steps.total_bytes": 580550859
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 17,
        //             "redshift_plan_steps.step": 18,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "lr$zl4nz55lvnpxd2r44tywg_primary_account_dialect_30_days_base",
        //             "redshift_plan_steps.total_bytes": 179574552
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 19,
        //             "redshift_plan_steps.step": 20,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "lr$zlas28hj7hw5qezqql7lg_primary_account_dialect_90_days_base",
        //             "redshift_plan_steps.total_bytes": 171913812
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 21,
        //             "redshift_plan_steps.step": 22,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 584940
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 22,
        //             "redshift_plan_steps.step": 27,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 22,
        //             "redshift_plan_steps.step": 23,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_DIST_ALL_NONE",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 1988796
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 23,
        //             "redshift_plan_steps.step": 24,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "check",
        //             "redshift_plan_steps.total_bytes": 80493130
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 23,
        //             "redshift_plan_steps.step": 25,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 233976
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 25,
        //             "redshift_plan_steps.step": 26,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "lr$zlsw0mpr91fq0b3ljkxsh_latest_check",
        //             "redshift_plan_steps.total_bytes": 233976
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 27,
        //             "redshift_plan_steps.step": 28,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "check_status",
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 29,
        //             "redshift_plan_steps.step": 30,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 68
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 30,
        //             "redshift_plan_steps.step": 41,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 30,
        //             "redshift_plan_steps.step": 31,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 72
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 31,
        //             "redshift_plan_steps.step": 32,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 152
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 31,
        //             "redshift_plan_steps.step": 39,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 32,
        //             "redshift_plan_steps.step": 34,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 44
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 32,
        //             "redshift_plan_steps.step": 33,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "license",
        //             "redshift_plan_steps.total_bytes": 315440
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 34,
        //             "redshift_plan_steps.step": 35,
        //             "redshift_plan_steps.operation": "Hash Join",
        //             "redshift_plan_steps.network_distribution_type": "DS_BCAST_INNER",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 44
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 35,
        //             "redshift_plan_steps.step": 36,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "client",
        //             "redshift_plan_steps.total_bytes": 116750
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 35,
        //             "redshift_plan_steps.step": 37,
        //             "redshift_plan_steps.operation": "Hash",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": null,
        //             "redshift_plan_steps.total_bytes": 40
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 37,
        //             "redshift_plan_steps.step": 38,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "_account",
        //             "redshift_plan_steps.total_bytes": 40
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 39,
        //             "redshift_plan_steps.step": 40,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "license_status",
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 41,
        //             "redshift_plan_steps.step": 42,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "license_type",
        //             "redshift_plan_steps.total_bytes": 4
        //           },
        //           {
        //             "redshift_plan_steps.parent_step": 43,
        //             "redshift_plan_steps.step": 44,
        //             "redshift_plan_steps.operation": "Seq Scan",
        //             "redshift_plan_steps.network_distribution_type": "",
        //             "redshift_plan_steps.table": "check_type",
        //             "redshift_plan_steps.total_bytes": 4
        //           }]

        ///////////////////////////////////////////////////////////////////// temp /////////////////////////////////////////////////////////

        this.container.innerHTML='' // clear container of previous vis so width & height is correct


        function handleErrors(vis, res, options) {
          var check = function (group, noun, count, min, max) {
              if (!vis.addError || !vis.clearErrors) {
                  return false;
              }
              if (count < min) {
                  vis.addError({
                      title: "Not Enough " + noun + "s",
                      message: "This visualization requires " + (min === max ? 'exactly' : 'at least') + " " + min + " " + noun.toLowerCase() + (min === 1 ? '' : 's') + ".",
                      group: group
                  });
                  return false;
              }
              if (count > max) {
                  vis.addError({
                      title: "Too Many " + noun + "s",
                      message: "This visualization requires " + (min === max ? 'exactly' : 'no more than') + " " + max + " " + noun.toLowerCase() + (min === 1 ? '' : 's') + ".",
                      group: group
                  });
                  return false;
              }
              vis.clearErrors(group);
              return true;
          };
          var _a = res.fields, pivots = _a.pivots, dimensions = _a.dimensions, measures = _a.measure_like;
          return (check('pivot-req', 'Pivot', pivots.length, options.min_pivots, options.max_pivots)
              && check('dim-req', 'Dimension', dimensions.length, options.min_dimensions, options.max_dimensions)
              && check('mes-req', 'Measure', measures.length, options.min_measures, options.max_measures));
        };

        // requires no pivots, 3 dimensions, and 1 measure
        if (!handleErrors(this, queryResponse, { min_pivots: 0, max_pivots: 0, min_dimensions: 3, max_dimensions: 3, min_measures: 1, max_measures: 1})) {
          return;
        } 
        else { 
          console.log('Query contains correct number of dimensions, measures, and pivots') 
        };
     
        // data must be arranged by: parent_step | current_step | name_of_step | metric_value
        var dim_1_parent_step = queryResponse.fields.dimensions[0].name, dim_2_step = queryResponse.fields.dimensions[1].name, dim_3_name = queryResponse.fields.dimensions[2].name;
        var measure = queryResponse.fields.measures[0].name;
        //TODO modify array to take dimension and measure names dynamically

        //rename keys
        rows = Object.keys(data).length;
        for (i=0; i<rows; i++) {
            data[i]["name"] = data[i][dim_2_step] + ' ' + data[i][dim_3_name]
            delete data[i]["redshift_plan_steps.operation"]
            data[i]["value"] = data[i][measure] // TODO change to total cost
            delete data[i][measure]
            data[i]["children"] = []
        }

        //nest children steps inside parent steps for chart
        // TODO sort rows ascending by parent step
        while (rows > 1) {
            last_element = data[rows-1]
            last_element_parent = last_element[dim_1_parent_step]
            for (i=0; i<rows; i++) {
                // console.log(data[i]["redshift_plan_steps.step"])
                if (data[i][dim_2_step] == last_element_parent) {
                    data[i]["children"].push(last_element);
                    if (data[i]["value"]!=last_element["value"]) {
                        data[i]["value"]+=last_element["value"]
                    }
                    delete data[rows-1];
                    break;
                }
            }
            rows = Object.keys(data).length; 
        }

        data = data[0] 
        console.log(data);



        var flameGraph = d3.flamegraph()
            .width(element.clientWidth);
            // .height(element.clientHeight)
            // .cellHeight(18)
            // .transitionDuration(750)
            // .minFrameSize(5)
            // .transitionEase(d3.easeCubic)
            // .sort(true)
            // //Example to sort in reverse order
            // //.sort(function(a,b){ return d3.descending(a.name, b.name);})
            // .title("")
            // .onClick(onClick)
            // .differential(false)
            // .elided(false)
            // .selfValue(false);
            //TODO add additional formatting here

        d3.select("#my-flamegraph")
            .datum(data)
            .call(flameGraph);


        // Example on how to use custom tooltips using d3-tip.
        // var tip = d3.tip()
        //   .direction("s")
        //   .offset([8, 0])
        //   .attr('class', 'd3-flame-graph-tip')
        //   .html(function(d) { return "name: " + d.data.name + ", value: " + d.data.value; });
        // flameGraph.tooltip(tip);

        var details = document.getElementById("details");
        flameGraph.setDetailsElement(details);

        // Example on how to use searchById() function in flamegraph. 
        // To invoke this function after loading the graph itself, this function should be registered in d3 datum(data).call()
        // (See d3.json invocation in this file)
        function invokeFind() {
          var searchId = parseInt(location.hash.substring(1), 10);
          if (searchId) {
            find(searchId);
          }
        }
        // Example on how to use custom labels
        // var label = function(d) {
        //  return "name: " + d.name + ", value: " + d.value;
        // }
        // flameGraph.label(label);
        // Example of how to set fixed chart height
        // flameGraph.height(540);
        // d3.json("stacks.json", function(error, data) {
        //   if (error) return console.warn(error);
        //   d3.select("#chart")
        //       .datum(data)
        //       .call(flameGraph)
        //       .call(invokeFind);
        // });

        document.getElementById("my-flamegraph").addEventListener("submit", function(event){
          event.preventDefault();
          search();
        });

        function search() {
          var term = document.getElementById("term").value;
          flameGraph.search(term);
        }

        function find(id) {
          var elem = flameGraph.findById(id);
          if (elem){
            console.log(elem)
            flameGraph.zoomTo(elem);
          }
        }

        function clear() {
          document.getElementById('term').value = '';
          flameGraph.clear();
        }

        function resetZoom() {
          flameGraph.resetZoom();
        }

        function onClick(d) {
          console.info(`Clicked on ${d.data.name}, id: "${d.id}"`);
          history.pushState({ id: d.id }, d.data.name, `#${d.id}`);
        }

    }
};
looker.plugins.visualizations.add(vis);