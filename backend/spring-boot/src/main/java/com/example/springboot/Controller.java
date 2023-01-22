package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@GetMapping("/price")
	public Object price(@RequestParam(value = "originCity", defaultValue = "Vancouver") String originCity
		, @RequestParam(value = "originIATA", defaultValue = "YVR") String originIATA
		, @RequestParam(value = "destinationCity", defaultValue = "Incheon") String destinationCity
		, @RequestParam(value = "destinationIATA", defaultValue = "ICN") String destinationIATA
		, @RequestParam(value = "departureDate", defaultValue = "	") String departureDate
		, @RequestParam(value = "returnDate", defaultValue = "2023-2-27") String returnDate
		, @RequestParam(value = "cabinClass", defaultValue = "Economy") String cabinClass) throws Exception {
		FlightPricing flightPricing = new FlightPricing(originCity, originIATA, destinationCity, destinationIATA, departureDate, returnDate, cabinClass);
		return flightPricing.getPrice();
	}

	@GetMapping("/travelInfo")
	public Object travelInfo(@RequestParam(value = "country", defaultValue = "South-Korea") String country) throws Exception {
		TravelInfo travelInfo = new TravelInfo(country);
		return travelInfo.getTravelInfo();
	}
}