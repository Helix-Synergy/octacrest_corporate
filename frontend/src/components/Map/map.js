


// src/components/Map/map.js

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { easeSin } from 'd3-ease';

const WorldMap = ({ width, height, onCountryHover }) => {
    const svgRef = useRef();
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
                const topojsonData = await response.json();

                const countries = topojson.feature(topojsonData, topojsonData.objects.countries);
                setGeoData(countries);
            } catch (error) {
                console.error("Error fetching map data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!geoData) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        // --- Removed SVG Gradient Definitions ---
        // The <defs> section for gradients is no longer needed.

        const g = svg.append('g');

        const scaleFactor = width * 0.18;
        const translateX = width / 2;
     const translateY = height / 2 + height * 0.12;


        const projection = d3.geoMercator()
            .scale(scaleFactor)
            .translate([translateX, translateY]);

        const pathGenerator = d3.geoPath().projection(projection);

       const glowingCountries = ['India', 'Canada'];
// These countries will get specific colors and shadows

 const pinData = [
  {
    name: "Hyderabad, India",
    countryName: "India",
    coordinates: [78.4867, 17.3850],
  },
  {
    name: "Vancouver | Canada",
    countryName: "Canada",
    coordinates: [-123.1207, 49.2827],
  }
];


        // Draw country paths
        const allPaths = g.selectAll('.country')
            .data(geoData.features)
            .join('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)
            .attr('stroke', '#6b7280') // Border color - keeping as is from previous version
            .attr('stroke-width', 0.5)
        .attr('fill', d => {
  if (d.properties.name === 'India') return '#00BCD4';
  if (d.properties.name === 'Canada') return '#00BCD4';
  return '#4B5563';
})

     .style('filter', d => {
  if (d.properties.name === 'India')
    return 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.7))';
  if (d.properties.name === 'Canada')
    return 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.7))';
  return 'none';
});


        // Add Hover Events to the countries
        allPaths
            .on('mouseover', (event, d) => {
                if (onCountryHover) {
                    if (d.properties.name === 'India') {
                        onCountryHover('india');
                    } else if (d.properties.name === 'Canada') {
  onCountryHover('usa');
}

                }
                // Optional: Highlight non-glowing countries on hover
                if (!glowingCountries.includes(d.properties.name)) {
                    // Lighter gray for general hover - adjusted slightly to fit new palette
                    d3.select(event.currentTarget).attr('fill', '#607D8B');
                }
            })
            .on('mouseout', (event, d) => {
                if (onCountryHover) {
                    onCountryHover(null); // Hide tooltip
                }
                // Revert fill for non-glowing countries on mouse out
                if (!glowingCountries.includes(d.properties.name)) {
                    d3.select(event.currentTarget).attr('fill', '#4B5563'); // Revert to new default darker gray-blue
                }
            });

        // Draw and animate pins (this part remains the same)
        const pins = g.selectAll('.pin')
            .data(pinData)
            .join('circle')
            .attr('class', 'pin')
            .attr('cx', d => projection(d.coordinates)[0])
            .attr('cy', d => projection(d.coordinates)[1])
            .attr('r', 5) // Pin size
            .attr('fill', 'rgba(0, 0, 0, 1)'); // Yellowish green color for pins - keeping as is

        const startPinGlow = () => {
            pins.transition()
                .duration(1000)
                .ease(easeSin)
                .attr('r', 8) // Pulse outwards
                .style('filter', 'drop-shadow(0 0 10px rgb(255, 0, 0))') // Red glow for pins - keeping as is
                .transition()
                .duration(1000)
                .ease(easeSin)
                .attr('r', 5) // Pulse inwards
                .style('filter', 'drop-shadow(0 0 5px rgba(0, 30, 255, 0.5))') // Subtler blue glow for pins - keeping as is
                .on('end', startPinGlow);
        };
        startPinGlow();

    }, [geoData, width, height, onCountryHover]);

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-full"
        />
    );
};

export default WorldMap;



