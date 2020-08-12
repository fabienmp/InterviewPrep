$(document).ready(function () {
    console.log("Dynamic ready!");


    let totalCalcs = 0;
    let totalCacheAccess = 0;

    function fibMemoized_intern() {

        let cache = {
            0: 0,
            1: 1
        };

        return function fib(n) {

            if (n in cache) {
                totalCacheAccess++;
                return cache[n]
            } else {

                if (n == 0)
                    return 0;

                if (n == 1)
                    return 1;

                var ret = fib(n - 1) + fib(n - 2);
                totalCalcs++;
                cache[n] = ret;
                return ret;

            }
        }
    }

    const fibMemoized = fibMemoized_intern();

    var divText = "";
    divText += " | FIB 77: " + fibMemoized(77) + " - TOTAL CALCS: " + totalCalcs + " - TOTAL CACHE ACCESS: " + totalCacheAccess;
    totalCalcs = 0, totalCacheAccess = 0;
    divText += " | FIB 7: " + fibMemoized(7) + " - TOTAL CALCS: " + totalCalcs + " - TOTAL CACHE ACCESS: " + totalCacheAccess;
    totalCalcs = 0, totalCacheAccess = 0;
    divText += " | FIB 19: " + fibMemoized(19) + " - TOTAL CALCS: " + totalCalcs + " - TOTAL CACHE ACCESS: " + totalCacheAccess;

    $('#DynamicProg_Fib').text(divText);

});