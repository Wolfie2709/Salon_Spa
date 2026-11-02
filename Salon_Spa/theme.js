import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
  },

  large: {
    width: 350,
    height: 52,
    borderRadius: 26,
  },
  small: {
    width: 160,
    height: 40,
    borderRadius: 20,
  },

  primary: { backgroundColor: "#8A5A34" },
  secondary: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
  },
  textButton: { backgroundColor: "transparent" },

  disabled: { opacity: 0.5 },
  pressedPrimary: { backgroundColor: "#6F4728" },
  pressedSecondary: { backgroundColor: "#F3EBE4" },
  pressedText: { opacity: 0.6 },

  text: {
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryText: { color: "#FFF" },
  secondaryText: { color: "#000" },
  textVariant: { color: "#8A5A34" },
});

export const homeStyle = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#12302B',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 24,
  },
  brand: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_700Bold',
    fontSize: 48,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    maxHeight: 485,
    borderRadius: 16,
  },
  tagline: {
    color: '#FFFFFF',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 34,
    lineHeight: 37.4,
    maxWidth: 286,
  },
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#8A5A34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },});

  export const signInStyle = StyleSheet.create({

  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#12302B',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  heading: {
    gap: 8,
  },
  brand: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
    letterSpacing: 2,
  },
  tagline: {
    color: '#FFFFFF',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 34,
    lineHeight: 37.4,
    maxWidth: 286,
  },
  field: {
    gap: 6,
  },
  label: {
    color: '#E4EEE8',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
  },
  input: {
    height: 50,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#12302B',
  },
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#8A5A34',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  pressed: { opacity: 0.85 },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    textAlign: 'center',
  },
});

export const signUpStyle = StyleSheet.create({
    
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#12302B',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  heading: {
    gap: 8,
  },
  brand: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
    letterSpacing: 2,
  },
  tagline: {
    color: '#FFFFFF',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 34,
    lineHeight: 37.4,
    maxWidth: 286,
  },
  field: {
    gap: 6,
  },
  label: {
    color: '#E4EEE8',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
  },
  input: {
    height: 50,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#12302B',
  },
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#8A5A34',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  pressed: { opacity: 0.85 },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    textAlign: 'center',
  },
});

export const homePageStyle = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#EEF2EC',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 130, // clears the floating tab bar
    gap: 20,
    width: '100%',
    maxWidth: 430,
  },
  greeting: {
    color: '#4A645E',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
    marginBottom: 4,
  },
  heading: {
    color: '#12302B',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 34,
    lineHeight: 37.4,
    maxWidth: 320,
  },
  search: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
    color: '#12302B',
  },
  chips: {
    gap: 8,
    paddingRight: 20,
  },
  chip: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: '#12302B',
  },
  chipText: {
    color: '#12302B',
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  promo: {
    height: 170,
    borderRadius: 24,
    backgroundColor: '#12302B',
    padding: 20,
    gap: 9,
  },
  promoLabel: {
    color: '#E8C9A0',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
  },
  promoTitle: {
    color: '#FFFFFF',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 22,
    maxWidth: 194,
  },
  sectionTitle: {
    color: '#12302B',
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 22,
  },
  list: {
    gap: 10,
  },
  card: {
    height: 100,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  cardImage: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  cardTitle: {
    flex: 1,
    color: '#4A645E',
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
  },
  cardPrice: {
    color: '#12302B',
    fontFamily: 'DMSans_700Bold',
    fontSize: 16,
  },
})