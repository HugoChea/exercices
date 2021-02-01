function countSteps(N) {

    // just as in our solution explanation above, we know that to climb 1 step
    // there is only 1 solution, and for 2 steps there are 2 solutions
    if (N === 1) { return 1; }
    if (N === 2) { return 2; }

    // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
    // an answer recursively
    return countSteps(N - 1) + countSteps(N - 2);

}