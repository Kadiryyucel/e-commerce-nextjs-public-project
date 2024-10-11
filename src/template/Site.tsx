'use client'
import PageFooter from '@/layout/pageFooter/page';
import PageHeader from '@/layout/pageHeader/page'
import { createTheme, PaletteColorOptions, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomPalette {
        default: PaletteColorOptions;
        primary: PaletteColorOptions;
    }
    interface Palette extends CustomPalette { }
    interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        default: true;
        primary: true;
    }
}

export default function Site({ children }: { children: React.ReactNode }) {

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });



    const orange = {
        main: '#ffa500',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
    };

    const theme = createTheme({
        palette: {
            default: createColor('#ffa500 !important'),
            primary: createColor('#ffa500 !important')
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        backgroundColor: orange.main,
                        color: orange.contrastText,
                        '&:hover': {
                            backgroundColor: orange.dark,
                        },
                    },
                },
            },
            MuiBadge: {
                styleOverrides: {
                    badge: {
                        backgroundColor: orange.main,
                        color: orange.contrastText,
                        '&:hover': {
                            backgroundColor: orange.dark,
                        },
                    }
                },
            },
        },
    });

    return (
        <div>
            <div className="relative">
                <div className="h-full">
                    <ThemeProvider theme={theme}>
                        <div className="wrapper">
                            <PageHeader />
                        </div>
                        {children}
                        <PageFooter/>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}