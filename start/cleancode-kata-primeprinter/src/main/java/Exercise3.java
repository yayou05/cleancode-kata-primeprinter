public class Exercise3 {
    /**
     *
     * @param amount price
     * @param type Account status (NotRegistered = 1, SimpleCustomer = 2, ValuableCustomer = 3, MostValuableCustomer = 4)
     * @param years Time in years that the client is our customer
     * @return THE PRICE
     */
    public double calculate(double amount, int type, int years)
    {
        double result = 0;
        double disc = (years > 5) ? (double) 5 / 100 : (double)years / 100;

        // NotRegistered
        if (type == 1)
        {
            result = amount;
            return result;
        }
        // SimpleCustomer
        else if (type == 2)
        {
            result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
        }
        // ValuableCustomer
        else if (type == 3)
        {
            result = (0.7 * amount) - disc * (0.7 * amount);
            return result;
        }
        // MostValuableCustomer
        else if (type == 4)
        {
            result = (amount - (0.5 * amount)) - disc * (amount - (0.5 * amount));
        }
        return result;
    }
}