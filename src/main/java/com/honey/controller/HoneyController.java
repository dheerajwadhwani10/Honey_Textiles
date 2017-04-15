package com.honey.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.honey.model.Product;
import com.honey.service.HoneyService;

@RestController
public class HoneyController {

	HoneyService honeyService;

	@RequestMapping("/callDemo")
	public @ResponseBody String callDemo() {
		return "Hello World !!";
	}
	
	@RequestMapping("/getValue")
    public @ResponseBody  Product greeting() {
        return new Product(1,"Suit");
    }

}
