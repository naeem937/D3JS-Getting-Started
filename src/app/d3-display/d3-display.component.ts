import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-display',
  templateUrl: './d3-display.component.html',
  styleUrls: ['./d3-display.component.scss']
})
export class D3DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.BarChart();

  }

  BarChart(){
    var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];  // Contains Data 
    var svgWidth = 500, svgHeight = 300, barPadding = 5;      // Setting Width & Height of SVG 
    var barWidth = svgWidth / dataset.length;                 // Setting Each Bar According To Data
    
    var svg = d3.select('svg')
      .attr("width", svgWidth)
      .attr("height", svgHeight);
    
    var barChart = svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function(d) {
         return svgHeight - d 
      })
      .attr("height", function(d) { 
         return d; 
      })
      .attr("width", barWidth - barPadding)
      .attr("class", "bar")
      .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
      });

    var text = svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) {
        return d;
      })
      .attr("y", function(d, i) {
        return svgHeight - d - 2;
      })
      .attr("x", function(d, i) {0
        return barWidth * i + 12  ;
      })
      .attr("fill", "#A64C38") 
  }


  
  

}