package com.mightyjava.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;

public interface IService<T> {
	Page<T> findAll(Pageable pageable);
	
	Optional<T> findById(Long id);
	
	T saveOrUpdate(T t);
	
	String deleteById(Long id);
}
