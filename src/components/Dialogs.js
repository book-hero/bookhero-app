import * as React from 'react'
import { View } from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper'

export function openDialog () {}

export const ConfirmationDialog = confirmationAction => () => {
  const [visible, setVisible] = React.useState(true)

  const hideDialog = () => setVisible(false)

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={confirmationAction}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}
