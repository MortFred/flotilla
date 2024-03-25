import { Button, Icon, Typography } from '@equinor/eds-core-react'
import { tokens } from '@equinor/eds-tokens'
import { AlertCategory } from 'components/Alerts/AlertsBanner'
import { useLanguageContext } from 'components/Contexts/LanguageContext'
import styled from 'styled-components'

const StyledDiv = styled.div`
    flex-direction: column;
`

const StyledAlertTitle = styled.div`
    display: flex;
    gap: 0.3em;
    align-items: flex-end;
`

const StyledButton = styled(Button)`
    text-align: left;
    height: auto;
    padding: 5px 5px;
`

interface SafeZoneBannerProps {
    alertCategory: AlertCategory
}

export const SafeZoneAlertContent = ({ alertCategory }: SafeZoneBannerProps): JSX.Element => {
    const { TranslateText } = useLanguageContext()
    const buttonBackgroundColor = alertCategory === AlertCategory.WARNING
                    ? tokens.colors.interactive.warning__highlight.hex
                    : tokens.colors.infographic.primary__mist_blue.hex
   
    return (
        <StyledDiv>
            <StyledAlertTitle>
                <Icon name="error_outlined" />
                <Typography>
                    {alertCategory === AlertCategory.WARNING ? TranslateText('WARNING') : TranslateText('INFO')}
                </Typography>
            </StyledAlertTitle>
            <StyledButton variant="ghost" color="secondary" style={{backgroundColor: buttonBackgroundColor}}>
                {alertCategory === AlertCategory.WARNING
                    ? TranslateText('Safe zone banner text')
                    : TranslateText('Dismiss safe zone banner text')}
            </StyledButton>
        </StyledDiv>
    )
}
