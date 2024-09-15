package com.apitesting.apitesting.model;

public class FibonacciResponse {
    private final long result;
    private final String error;

    public FibonacciResponse(long result) {
        this.result = result;
        this.error = null;
    }

    public FibonacciResponse(String error) {
        this.result = -1; // Không có giá trị Fibonacci hợp lệ
        this.error = error;
    }

    public long getResult() {
        return result;
    }

    public String getError() {
        return error;
    }
}
