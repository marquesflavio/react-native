import React from "react";
import { Alert, Button } from "react-native";


export function ButtonDefault() {
  return (
    <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />

  )
}