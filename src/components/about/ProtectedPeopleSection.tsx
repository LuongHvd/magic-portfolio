"use client";

import { useState } from "react";
import { Avatar, Button, Column, Flex, Heading, PasswordInput, Text } from "@once-ui-system/core";

type PersonCard = {
  name: string;
  avatar: string;
  description?: string;
};

type ProtectedPeopleSectionProps = {
  title: string;
  endpoint: string;
};

export default function ProtectedPeopleSection({
  title,
  endpoint,
}: ProtectedPeopleSectionProps) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [people, setPeople] = useState<PersonCard[]>([]);
  const [error, setError] = useState<string | undefined>();

  const handleUnlock = async () => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    });

    if (response.ok) {
      const data = await response.json();
      setPeople(data.people ?? []);
      setUnlocked(true);
      setError(undefined);
      return;
    }

    setError("Incorrect password");
  };

  return (
    <>
      <Heading as="h2" id={title} variant="display-strong-s" marginBottom="m">
        {title}
      </Heading>

      {!unlocked ? (
        <Column
          fillWidth
          border="neutral-medium"
          radius="m"
          padding="16"
          gap="12"
          marginBottom="40"
        >
          <Text variant="body-default-m" onBackground="neutral-weak">
            Enter password to view this section.
          </Text>
          <Flex fillWidth gap="8" mobileDirection="column" vertical="start">
            <PasswordInput
              id="enemies-password"
              label="Password"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  void handleUnlock();
                }
              }}
              errorMessage={error}
            />
            <Button onClick={() => void handleUnlock()}>Submit</Button>
          </Flex>
        </Column>
      ) : (
        <Column fillWidth gap="12" marginBottom="40">
          {people.length > 0 ? (
            people.map((person) => (
              <Flex
                key={person.name}
                fillWidth
                border="neutral-medium"
                radius="m"
                padding="16"
                gap="16"
                vertical="center"
              >
                <Avatar src={person.avatar} size="xl" />
                <Column gap="4">
                  <Text id={person.name} variant="heading-strong-l">
                    {person.name}
                  </Text>
                  {person.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {person.description}
                    </Text>
                  )}
                </Column>
              </Flex>
            ))
          ) : (
            <Text variant="body-default-m" onBackground="neutral-weak">
              No enemies listed.
            </Text>
          )}
        </Column>
      )}
    </>
  );
}
