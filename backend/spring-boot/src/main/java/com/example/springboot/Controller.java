package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@GetMapping("/landingPage")
	public LandingPage greeting(@RequestParam(value = "originCountry", defaultValue = "Canada") String originCountry
		, @RequestParam(value = "destinationCountry", defaultValue = "China") String destinationCountry
		, @RequestParam(value = "departureDate", defaultValue = "1/22/2023") String departureDate) {
		return new LandingPage(originCountry, destinationCountry, departureDate);
	}
}