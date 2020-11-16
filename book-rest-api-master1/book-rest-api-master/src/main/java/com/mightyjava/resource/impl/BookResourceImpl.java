package com.mightyjava.resource.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mightyjava.domain.Book;
import com.mightyjava.resource.Resource;
import com.mightyjava.service.IService;
@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:3000")
public class BookResourceImpl implements Resource<Book> {
	
	@Autowired
	private IService<Book> bookService;

	@Override
	public ResponseEntity<Page<Book>> findAll(Pageable pageable) {
		return new ResponseEntity<>(bookService.findAll(pageable), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Book> findById(Long id) {
		return new ResponseEntity<>(bookService.findById(id), HttpStatus.OK);
	}
	@Override
	public ResponseEntity<Book> save(Book book) {
		return new ResponseEntity<>(bookService.saveOrUpdate(book), HttpStatus.CREATED);
	}
	@Override
	public ResponseEntity<Book> update(Book book) {
		return new ResponseEntity<>(bookService.saveOrUpdate(book), HttpStatus.OK);
	}
	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(bookService.deleteById(id), HttpStatus.OK);
	}
}