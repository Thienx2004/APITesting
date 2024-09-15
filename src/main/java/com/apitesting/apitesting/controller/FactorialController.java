package com.apitesting.apitesting.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class FactorialController {
    // Hàm tính giai thừa
    public long factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("Number should be greater than zero");
        if (n == 0 || n == 1) return 1;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Định nghĩa route tính giai thừa
    @GetMapping("/factorial/{n}")
    public String getFactorial(@PathVariable int n) {
        try {
            long result = factorial(n);
            return "Factorial of " + n + " is: " + result;
        } catch (IllegalArgumentException e) {
            return e.getMessage();
        }
    }
}

