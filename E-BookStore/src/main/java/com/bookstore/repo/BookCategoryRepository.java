package com.bookstore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bookstore.model.BookCategory;

@RepositoryRestResource(collectionResourceRel = "bookCategory" , path = "book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
