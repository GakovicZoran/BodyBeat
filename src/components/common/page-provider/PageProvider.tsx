import React, { useEffect } from "react";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { en, bs } from "make-plural/plurals";
import { Helmet } from "react-helmet";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 480,
			md: 767,
			lg: 1200,
			xl: 1920,
		},
	},

	palette: {
		primary: {
			// main: GLOBAL_ROOT_CSS.primaryColor,
		},
		secondary: {
			// main: GLOBAL_ROOT_CSS.secondaryColor,
		},
	},
	typography: {
		fontFamily: ["Rubik, Arial, Helvetica, sans-serif"].join(","),

		h1: {
			fontSize: "60px",
			// color: GLOBAL_ROOT_CSS.primaryColor,
			padding: `64px 24px`,
			"@media (max-width:1200px)": {
				fontSize: "40px",
				padding: `32px 24px`,
			},
			"@media (max-width:767px)": {
				fontSize: "40px",
			},
			"@media (max-width:480px)": {
				fontSize: "30px",
			},
		},

		h2: {
			fontSize: "60px",
			// color: GLOBAL_ROOT_CSS.primaryColor,
			padding: `64px 24px 32px 24px`,
			textAlign: "center",
			"@media (max-width:1200px)": {
				fontSize: "40px",
			},
			"@media (max-width:767px)": {
				padding: `32px 24px 16px 24px`,
			},
			"@media (max-width:480px)": {
				fontSize: "30px",
			},
		},

		h3: {
			fontSize: "32px",
			padding: "0 24",
			// color: GLOBAL_ROOT_CSS.primaryColor,
			"@media (max-width:767px)": {
				fontSize: "24px",
			},

			"@media (max-width:480px)": {
				fontSize: "24px",
			},
		},

		h4: {
			fontSize: "20px",
			// color: GLOBAL_ROOT_CSS.primaryColor,
			lineHeight: "40px",
			letterSpacing: "2px",
			"@media (max-width:1200px)": {
				lineHeight: "32px",
				letterSpacing: "1px",
			},
			"@media (max-width:480px)": {
				fontSize: "16px",
				lineHeight: "22px",
			},
		},

		h5: {
			fontSize: "16px",
			// color: GLOBAL_ROOT_CSS.primaryColor,
			letterSpacing: "1.5px",
		},

		h6: {
			fontSize: "14px",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					padding: "0!important",
					overflow: "visible!important",
					fontFamily: "Rubik",
					"& p": {
						margin: 0,
					},
					"& h3": {
						lineHeight: "1.167",
					},
					".grecaptcha-badge": {
						visibility: "hidden",
					},

					"& button": {
						fontFamily: "Rubik, Arial, Helvetica, sans-serif",
						letterSpacing: "2px",
						fontSize: "16px",
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				text: {
					"&:hover": { backgroundColor: "transparent" },
					padding: "0px",
				},
			},
		},
		MuiGrid2: {
			defaultProps: {
				margin: "0 auto",
			},
		},
		MuiPaper: {
			styleOverrides: {
				rounded: {
					boxShadow: "0px 5px 14px 0px rgba(0,0,0,0.75)",
					borderRadius: "10px",
				},
				root: {
					paddingRight: "0",
					flexDirection: "inherit!important" as "inherit",
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				root: {
					zIndex: "0",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					paddingRight: "0!important",
				},
			},
		},
	},
});

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY || "";
const defaultLocale = "en";

export const locales = {
	en: "English",
	bs: "Bosanski",
};

i18n.loadLocaleData({
	en: { plurals: en },
	bs: { plurals: bs },
});

const dynamicActivate = async (locale: string) => {
	const { messages } = await import(`../../../locales/${locale}/messages`);
	i18n.load(locale, messages);
	i18n.activate(locale);
};

const PageProvider = ({ children }: any) => {
	useEffect(() => {
		dynamicActivate(defaultLocale);
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Helmet>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link
							rel="preconnect"
							href="https://fonts.gstatic.com"
							crossOrigin=""
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
							rel="stylesheet"
						/>
						<title>
							OctaCode - Make Your Brand Digitally Successful &amp; Authentic
						</title>
						{/* <link rel="icon" type="octa-code-logo" href={ocMiniLogo} /> */}
						<meta
							name="description"
							content="Show your product / service in the most attractive light with the help of OctaCode - get a FREE quote today!"
							data-react-helmet="true"
						/>
						<meta
							name="keywords"
							content="OctaCode, IT Company, Digital Solutions, Software Engineers, Best Software Solutions, Development Steps, Software Development Lifecycle, Best Practices Of QA Software Testing, Functional Software, Proper Software Maintenance, Sucessful Business, Digital Age, Business Requirements, Collaboration, Strategy Development, Cyper Security, Security Infrastructure, Special Solution, Software Development, Consulting, Development, Javascript, Banja Luka, Bosnia and Herzegovina, Global, Outsourcing, Projects, Clients, Products, "
							data-react-helmet="true"
						/>
						{/* <meta name="thumbnail" content={ocLogo} /> */}
						<script>
							{`
                (function(w,d,e,u,f,l,n){w[f] = w[f] || function () {
                (w[f].q = w[f].q || [])
                .push(arguments);
                }, l = d.createElement(e), l.async = 1, l.src = u,
                n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                ml('account', '257221');
              `}
						</script>
					</Helmet>

					{children}
				</CssBaseline>
			</ThemeProvider>
		</I18nProvider>
	);
};
export default PageProvider;
