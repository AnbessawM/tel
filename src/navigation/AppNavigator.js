// Add these additional screens to the navigation stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
    <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const user = useSelector(state => state.auth.user);
  
  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          {/* Existing tab screens */}
        </Tab.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};