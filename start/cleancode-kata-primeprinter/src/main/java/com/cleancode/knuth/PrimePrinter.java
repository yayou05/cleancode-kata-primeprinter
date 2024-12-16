package com.cleancode.knuth;

public class PrimePrinter {
    public static void main(String[] args) {
        final int M = 1000;
        final int RR = 50;
        final int CC = 4;
        final int ORDMAX = 30;
        int P[] = new int[M + 1];
        int PAGENUMBER;
        int PAGEOFFSET;
        int J;
        int K;
        boolean JPRIME;
        int ORD;
        int SQUARE;
        int N = 0;
        int MULT[] = new int[ORDMAX + 1];

        J = 1;
        K = 1;
        P[1] = 2;
        ORD = 2;
        SQUARE = 9;

        while (K < M) {
            do {
                J += 2;
                if (J == SQUARE) {
                    ORD++;
                    SQUARE = P[ORD] * P[ORD];
                    MULT[ORD - 1] = J;
                }
                N = 2;
                JPRIME = true;
                while (N < ORD && JPRIME) {
                    while (MULT[N] < J)
                        MULT[N] += P[N] + P[N];
                    if (MULT[N] == J)
                        JPRIME = false;
                    N++;
                }
            } while (!JPRIME);
            K++;
            P[K] = J;
        }

        PAGENUMBER = 1;
        PAGEOFFSET = 1;
        while (PAGEOFFSET <= M) {
            printPrimes(P, M, RR, CC, PAGENUMBER, PAGEOFFSET);
            PAGENUMBER++;
            PAGEOFFSET += RR * CC;
        }
    }

    private static void printPrimes(int[] primes, int numberOfPrimes, int rowsPerPage, int columnsPerPage, int pageNumber, int pageOffset) {
        System.out.print("The First ");
        System.out.print(Integer.toString(numberOfPrimes));
        System.out.print(" Prime Numbers === Page ");
        System.out.print(Integer.toString(pageNumber));
        System.out.println("\n");

        for (int rowOffset = pageOffset; rowOffset <= pageOffset + rowsPerPage - 1; rowOffset++) {
            for (int col = 0; col <= columnsPerPage - 1; col++) {
                if (rowOffset + col * rowsPerPage <= numberOfPrimes)
                    System.out.printf("%10d", primes[rowOffset + col * rowsPerPage]);
            }
            System.out.println();
        }
        System.out.println("\f");
        pageNumber++;
    }
}
