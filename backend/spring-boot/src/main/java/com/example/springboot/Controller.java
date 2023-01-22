package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@GetMapping("/landingPage")
	public LandingPage page(@RequestParam(value = "originCity", defaultValue = "Vancouver") String originCity
		, @RequestParam(value = "originIATA", defaultValue = "YVR") String originIATA
		, @RequestParam(value = "destinationCity", defaultValue = "Calgary") String destinationCity
		, @RequestParam(value = "destinationIATA", defaultValue = "YYC") String destinationIATA
		, @RequestParam(value = "departureDate", defaultValue = "2023-1-21") String departureDate
		, @RequestParam(value = "returnDate", defaultValue = "2023-1-27") String returnDate
		, @RequestParam(value = "cabinClass", defaultValue = "Economy") String cabinClass) {
		return new LandingPage(originCity, originIATA, destinationCity, destinationIATA, departureDate, returnDate, cabinClass);
	}

	@GetMapping("/price")
	public Object price(@RequestParam(value = "originCity", defaultValue = "Vancouver") String originCity
		, @RequestParam(value = "originIATA", defaultValue = "YVR") String originIATA
		, @RequestParam(value = "destinationCity", defaultValue = "Calgary") String destinationCity
		, @RequestParam(value = "destinationIATA", defaultValue = "YYC") String destinationIATA
		, @RequestParam(value = "departureDate", defaultValue = "2023-2-21") String departureDate
		, @RequestParam(value = "returnDate", defaultValue = "2023-2-27") String returnDate
		, @RequestParam(value = "cabinClass", defaultValue = "Economy") String cabinClass) throws Exception {
		LandingPage landingPage = new LandingPage(originCity, originIATA, destinationCity, destinationIATA, departureDate, returnDate, cabinClass);
		return landingPage.getPrice();
	}
}