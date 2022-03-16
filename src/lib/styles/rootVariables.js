import { createGlobalStyle } from "styled-components";

export const RootVariables = createGlobalStyle`
    :root {
        --body: ${({ theme }) => theme.body};
        --text-primary: ${({ theme }) => theme.textPrimary};
        --text-secondary: ${({ theme }) => theme.textSecondary};
        --text-disabled: ${({ theme }) => theme.textDisabled};
        --divider: ${({ theme }) => theme.divider};
        --hover: ${({ theme }) => theme.hover};
        --selected: ${({ theme }) => theme.selected};

        --text-white: ${({ theme }) => theme.text.white};
        --text-black: ${({ theme }) => theme.text.black};

        --primary-main: ${({ theme }) => theme.primary.main};
        --primary-light: ${({ theme }) => theme.primary.light};
        --primary-dark: ${({ theme }) => theme.primary.dark};
        --primary-highlight: ${({ theme }) => theme.primary.highlight};

        --secondary-main: ${({ theme }) => theme.secondary.main};
        --secondary-light: ${({ theme }) => theme.secondary.light};
        --secondary-dark: ${({ theme }) => theme.secondary.dark};
        --secondary-highlight: ${({ theme }) => theme.secondary.highlight};

        --success-main: ${({ theme }) => theme.success.main};
        --success-light: ${({ theme }) => theme.success.light};
        --success-dark: ${({ theme }) => theme.success.dark};
        --success-highlight: ${({ theme }) => theme.success.highlight};

        --error-main: ${({ theme }) => theme.error.main};
        --error-light: ${({ theme }) => theme.error.light};
        --error-dark: ${({ theme }) => theme.error.dark};
        --error-highlight: ${({ theme }) => theme.error.highlight};

        --info-main: ${({ theme }) => theme.info.main};
        --info-light: ${({ theme }) => theme.info.light};
        --info-dark: ${({ theme }) => theme.info.dark};
        --info-highlight: ${({ theme }) => theme.info.highlight};

        --warning-main: ${({ theme }) => theme.warning.main};
        --warning-light: ${({ theme }) => theme.warning.light};
        --warning-dark: ${({ theme }) => theme.warning.dark};
        --warning-highlight: ${({ theme }) => theme.warning.highlight};
    }
`;