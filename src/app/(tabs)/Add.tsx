import { Container } from "@/comp/general/RestyleComp";
import CreateNewProject from "@/comp/general/screens/CreateNewProject";
import ProcessScreen from "@/comp/general/screens/ProcessScreen";
import { taskSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";


type formData = {
  taskName: string;
};

export default function Add() {
  const [visible, setVisible] = useState(true);
  const [tname, setTname] = useState("");
  const t = useTheme();
  // const headerHeight = useHeaderHeight();
  // const screenHeight = Dimensions.get("window").height;
  const { control, handleSubmit } = useForm<formData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskName: "",
    },
  });
  const onSubmit = (data: formData) => {
    console.log("Submitted data:", data);
    if (data.taskName.trim()) {
      setVisible(false);
      setTname(data.taskName);
    }
  };
  return (
    <Container>
      <CreateNewProject
        isVisible={visible}
        control={control}
        handleSubmit={handleSubmit(onSubmit)}
      />
      {!visible && (
        <ProcessScreen name={tname} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({

});
