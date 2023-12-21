function rec(n) {
    if (n <= 1) {
        return n;
    }

    return n + rec(n - 1);
}

const r = rec(3);

