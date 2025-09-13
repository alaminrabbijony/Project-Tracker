import Btn from "@/comp/general/Btn";
import CustomeTxtInput from "@/comp/general/CustomeTxtInput";
import { Container, TxtTitle } from "@/comp/general/RestyleComp";
import { taskSchema } from "@/schema/schema";
import Fontisto from "@expo/vector-icons/Fontisto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type formData = {
  taskName: string;
};

export default function Add() {
  //const [visible, setVisible] = useState(true);
  const [tname, setTname] = useState("");
  const t = useTheme();
  const router = useRouter();
  // const headerHeight = useHeaderHeight();
  // const screenHeight = Dimensions.get("window").height;

  const { control, handleSubmit } = useForm<formData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskName: "",
    },
  });
  // const onSubmit = (data: formData) => {
  //   console.log("Submitted data:", data);
  //   if (data.taskName.trim()) {
  //     setVisible(false);
  //     setTname(data.taskName);
  //   }
  // };

  const onSubmit = (data: formData) => {
    console.log("submitted data:", data);
    if (data.taskName.trim()) {
      setTname(data.taskName);
      router.push(`/projects/[id]`);
    }
  };

  return (
    <Container style={[styles.root]}>
      <View style={styles.closeBtn}>
        <Fontisto
        name="close-a"
        size={32}
        color={t.colors.headerTint}
        onPress={() => router.back()}
      />
      </View>
      <Container style={styles.form}>
        <TxtTitle style={styles.title}>Project Name</TxtTitle>
        <CustomeTxtInput
          control={control}
          name="taskName"
          placeHolder="Enter Project Name"
          containerStyle={styles.input}
        />
        <Btn style={styles.button} onPress={handleSubmit(onSubmit)}>
          Create Project
        </Btn>
      </Container>
    </Container>

    // <Container>
    //   <CreateNewProject
    //     isVisible={visible}
    //     control={control}
    //     handleSubmit={handleSubmit(onSubmit)}
    //   />
    //   {!visible && (
    //     <ProcessScreen name={tname} />
    //   )}
    // </Container>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
    padding: 20,
  },
  closeBtn: {
   alignItems: "flex-end",
   width: "100%",
   padding: 10,
  },
  form: {
    width: "100%",
    alignItems: "center",
    paddingTop: 200,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    margin: 20,
  },
  button: {
    width: "90%",
    marginBottom: 200,
  },
});
