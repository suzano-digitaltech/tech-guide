import React from "react";
import { Box, Icon, Image, Link, Text } from "@src/components";
import pkg from "../../../package.json";
import { useI18n } from "@src/infra/i18n";

export default function Footer() {
  const i18n = useI18n();
  return (
    <Box
      tag="footer"
      styleSheet={{
        color: "#8992a1",
        backgroundColor: "#080f1b",
        alignItems: "center",
        padding: {
          xs: "4.9375em 0",
          md: "3.75em 0",
        },
      }}
    >
      <Box
        styleSheet={{
          width: "100%",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingHorizontal: {
            md: "2.5rem",
          },
          maxWidth: "80rem",
        }}
      >
        <Box>
          <Link href="/">
            <Image
              styleSheet={{
                width: { xs: "69px", md: "59px" },
                height: { xs: "69px", md: "45px" },
                marginBottom: {
                  xs: "2.5em",
                  md: "0",
                },
              }}
              src="//suzano-digitaltech.github.io/tech-guide/assets/image/logo_suzano.png"
              alt="Logo"
            />
          </Link>
        </Box>
        <Box
          styleSheet={{
            flex: 1,
            padding: "0 1em",
            fontSize: "0.75rem",
            fontWeight: "600",
            lineHeight: "1.5",
            textAlign: {
              xs: "center",
              md: "initial",
            },
            marginBottom: {
              xs: "2em",
              md: "0",
            },
          }}
        >
          <Text
            tag="p"
            styleSheet={{
              marginBottom: "4px",
            }}
          >
            {i18n.content("FOOTER.DESCRIPTION")}
            {pkg.version}
          </Text>
          <Text
            tag="p"
            styleSheet={{
              marginBottom: "4px",
            }}
          >
            <Link
              href={i18n.content("FOOTER.SUZANO.LINK")}
              styleSheet={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              Suzano
            </Link>{" "}
          </Text>
          <Text>
            {i18n.content("FOOTER.OPEN_SOURCE_CTA", {
              link: ({ children, text, ...props }: any) => (
                <>
                  <Link
                    {...props}
                    styleSheet={{
                      textDecoration: "none",
                      color: "#FFFFFF",
                    }}
                  >
                    {children}
                    {text}
                  </Link>
                </>
              ),
            })}
          </Text>
        </Box>
        <Box tag="nav">
          <Box
            styleSheet={{
              color: "white",
              flexDirection: "row",
              fontSize: "22px",
              gap: "0.625em",
            }}
            tag="ul"
          >
            <Box tag="li">
              <Link href={i18n.content("FOOTER.YOUTUBE")}>
                <Icon name="youtube" />
              </Link>
            </Box>
            <Box tag="li">
              <Link href={i18n.content("FOOTER.FACEBOOK")}>
                <Icon name="facebook" />
              </Link>
            </Box>
            <Box tag="li">
              <Link href={i18n.content("FOOTER.INSTAGRAM")}>
                <Icon name="instagram" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
