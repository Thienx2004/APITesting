package com.apitesting.apitesting.controller;

import com.apitesting.apitesting.model.FibonacciResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FibonacciController {

    @GetMapping("/fibonacci")
    public ResponseEntity<FibonacciResponse> fibonacci(@RequestParam("n") int n) {
        if (n < 0) {
            // Trả về lỗi nếu n < 0
            return new ResponseEntity<>(new FibonacciResponse("n should be greater than or equal to 0"), HttpStatus.BAD_REQUEST);
        }
        long result = calculateFibonacci(n);
        // Trả về kết quả dưới dạng JSON
        return ResponseEntity.ok(new FibonacciResponse(result));
    }

    // Hàm đệ quy tính Fibonacci
    private long calculateFibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }


}
