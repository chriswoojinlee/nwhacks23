package com.example.springboot;

import java.net.URL;
import java.util.LinkedHashMap;

import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;

public record FlightPricing(String originCity, String originIATA, String destinationCity, String destinationIATA, String departureDate, String returnDate, String cabinClass) { 
    public Object getPrice() throws IOException, ParseException {
        String GET_URL = "https://api.flightapi.io/roundtrip/63cc81c87e4ce38e4b344795/" + originIATA + "/" + destinationIATA + "/" + departureDate + "/" + returnDate + "/1/0/0/" + cabinClass + "/CAD";
        URL obj = new URL(GET_URL);
        System.out.println(obj);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		int responseCode = con.getResponseCode();
		System.out.println("GET Response Code :: " + responseCode);
		if (responseCode == HttpURLConnection.HTTP_OK) { 
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			JSONParser parser = new JSONParser(response.toString());  
            LinkedHashMap<String, Object> json = parser.object();
			Object fares = json.get("fares");

            return fares;
		} else {
			System.out.println("GET request did not work.");
		}
        return null;
    }

}