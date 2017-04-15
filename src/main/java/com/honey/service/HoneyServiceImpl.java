package com.honey.service;

import org.springframework.stereotype.Service;

import com.honey.dao.HoneyDao;

@Service
public class HoneyServiceImpl implements HoneyService {

	HoneyDao honeyDao;

	public void getValue() {
		honeyDao.getValue();
	}

}