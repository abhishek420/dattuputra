function testhack(x) {
    for (; x.next; x = x.next);
    return x;
}

testhack();