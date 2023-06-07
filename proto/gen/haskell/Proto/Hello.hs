{- This file was auto-generated from hello.proto by the proto-lens-protoc program. -}
{-# LANGUAGE ScopedTypeVariables, DataKinds, TypeFamilies, UndecidableInstances, GeneralizedNewtypeDeriving, MultiParamTypeClasses, FlexibleContexts, FlexibleInstances, PatternSynonyms, MagicHash, NoImplicitPrelude, DataKinds, BangPatterns, TypeApplications, OverloadedStrings, DerivingStrategies#-}
{-# OPTIONS_GHC -Wno-unused-imports#-}
{-# OPTIONS_GHC -Wno-duplicate-exports#-}
{-# OPTIONS_GHC -Wno-dodgy-exports#-}
module Proto.Hello (
        Greeter(..), HelloReply(), HelloRequest()
    ) where
import qualified Data.ProtoLens.Runtime.Control.DeepSeq as Control.DeepSeq
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Prism as Data.ProtoLens.Prism
import qualified Data.ProtoLens.Runtime.Prelude as Prelude
import qualified Data.ProtoLens.Runtime.Data.Int as Data.Int
import qualified Data.ProtoLens.Runtime.Data.Monoid as Data.Monoid
import qualified Data.ProtoLens.Runtime.Data.Word as Data.Word
import qualified Data.ProtoLens.Runtime.Data.ProtoLens as Data.ProtoLens
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Encoding.Bytes as Data.ProtoLens.Encoding.Bytes
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Encoding.Growing as Data.ProtoLens.Encoding.Growing
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Encoding.Parser.Unsafe as Data.ProtoLens.Encoding.Parser.Unsafe
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Encoding.Wire as Data.ProtoLens.Encoding.Wire
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Field as Data.ProtoLens.Field
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Message.Enum as Data.ProtoLens.Message.Enum
import qualified Data.ProtoLens.Runtime.Data.ProtoLens.Service.Types as Data.ProtoLens.Service.Types
import qualified Data.ProtoLens.Runtime.Lens.Family2 as Lens.Family2
import qualified Data.ProtoLens.Runtime.Lens.Family2.Unchecked as Lens.Family2.Unchecked
import qualified Data.ProtoLens.Runtime.Data.Text as Data.Text
import qualified Data.ProtoLens.Runtime.Data.Map as Data.Map
import qualified Data.ProtoLens.Runtime.Data.ByteString as Data.ByteString
import qualified Data.ProtoLens.Runtime.Data.ByteString.Char8 as Data.ByteString.Char8
import qualified Data.ProtoLens.Runtime.Data.Text.Encoding as Data.Text.Encoding
import qualified Data.ProtoLens.Runtime.Data.Vector as Data.Vector
import qualified Data.ProtoLens.Runtime.Data.Vector.Generic as Data.Vector.Generic
import qualified Data.ProtoLens.Runtime.Data.Vector.Unboxed as Data.Vector.Unboxed
import qualified Data.ProtoLens.Runtime.Text.Read as Text.Read
{- | Fields :
     
         * 'Proto.Hello_Fields.message' @:: Lens' HelloReply Data.Text.Text@ -}
data HelloReply
  = HelloReply'_constructor {_HelloReply'message :: !Data.Text.Text,
                             _HelloReply'_unknownFields :: !Data.ProtoLens.FieldSet}
  deriving stock (Prelude.Eq, Prelude.Ord)
instance Prelude.Show HelloReply where
  showsPrec _ __x __s
    = Prelude.showChar
        '{'
        (Prelude.showString
           (Data.ProtoLens.showMessageShort __x) (Prelude.showChar '}' __s))
instance Data.ProtoLens.Field.HasField HelloReply "message" Data.Text.Text where
  fieldOf _
    = (Prelude..)
        (Lens.Family2.Unchecked.lens
           _HelloReply'message (\ x__ y__ -> x__ {_HelloReply'message = y__}))
        Prelude.id
instance Data.ProtoLens.Message HelloReply where
  messageName _ = Data.Text.pack "HelloReply"
  packedMessageDescriptor _
    = "\n\
      \\n\
      \HelloReply\DC2\CAN\n\
      \\amessage\CAN\SOH \SOH(\tR\amessage"
  packedFileDescriptor _ = packedFileDescriptor
  fieldsByTag
    = let
        message__field_descriptor
          = Data.ProtoLens.FieldDescriptor
              "message"
              (Data.ProtoLens.ScalarField Data.ProtoLens.StringField ::
                 Data.ProtoLens.FieldTypeDescriptor Data.Text.Text)
              (Data.ProtoLens.PlainField
                 Data.ProtoLens.Optional (Data.ProtoLens.Field.field @"message")) ::
              Data.ProtoLens.FieldDescriptor HelloReply
      in
        Data.Map.fromList
          [(Data.ProtoLens.Tag 1, message__field_descriptor)]
  unknownFields
    = Lens.Family2.Unchecked.lens
        _HelloReply'_unknownFields
        (\ x__ y__ -> x__ {_HelloReply'_unknownFields = y__})
  defMessage
    = HelloReply'_constructor
        {_HelloReply'message = Data.ProtoLens.fieldDefault,
         _HelloReply'_unknownFields = []}
  parseMessage
    = let
        loop ::
          HelloReply -> Data.ProtoLens.Encoding.Bytes.Parser HelloReply
        loop x
          = do end <- Data.ProtoLens.Encoding.Bytes.atEnd
               if end then
                   do (let missing = []
                       in
                         if Prelude.null missing then
                             Prelude.return ()
                         else
                             Prelude.fail
                               ((Prelude.++)
                                  "Missing required fields: "
                                  (Prelude.show (missing :: [Prelude.String]))))
                      Prelude.return
                        (Lens.Family2.over
                           Data.ProtoLens.unknownFields (\ !t -> Prelude.reverse t) x)
               else
                   do tag <- Data.ProtoLens.Encoding.Bytes.getVarInt
                      case tag of
                        10
                          -> do y <- (Data.ProtoLens.Encoding.Bytes.<?>)
                                       (do value <- do len <- Data.ProtoLens.Encoding.Bytes.getVarInt
                                                       Data.ProtoLens.Encoding.Bytes.getBytes
                                                         (Prelude.fromIntegral len)
                                           Data.ProtoLens.Encoding.Bytes.runEither
                                             (case Data.Text.Encoding.decodeUtf8' value of
                                                (Prelude.Left err)
                                                  -> Prelude.Left (Prelude.show err)
                                                (Prelude.Right r) -> Prelude.Right r))
                                       "message"
                                loop (Lens.Family2.set (Data.ProtoLens.Field.field @"message") y x)
                        wire
                          -> do !y <- Data.ProtoLens.Encoding.Wire.parseTaggedValueFromWire
                                        wire
                                loop
                                  (Lens.Family2.over
                                     Data.ProtoLens.unknownFields (\ !t -> (:) y t) x)
      in
        (Data.ProtoLens.Encoding.Bytes.<?>)
          (do loop Data.ProtoLens.defMessage) "HelloReply"
  buildMessage
    = \ _x
        -> (Data.Monoid.<>)
             (let
                _v = Lens.Family2.view (Data.ProtoLens.Field.field @"message") _x
              in
                if (Prelude.==) _v Data.ProtoLens.fieldDefault then
                    Data.Monoid.mempty
                else
                    (Data.Monoid.<>)
                      (Data.ProtoLens.Encoding.Bytes.putVarInt 10)
                      ((Prelude..)
                         (\ bs
                            -> (Data.Monoid.<>)
                                 (Data.ProtoLens.Encoding.Bytes.putVarInt
                                    (Prelude.fromIntegral (Data.ByteString.length bs)))
                                 (Data.ProtoLens.Encoding.Bytes.putBytes bs))
                         Data.Text.Encoding.encodeUtf8 _v))
             (Data.ProtoLens.Encoding.Wire.buildFieldSet
                (Lens.Family2.view Data.ProtoLens.unknownFields _x))
instance Control.DeepSeq.NFData HelloReply where
  rnf
    = \ x__
        -> Control.DeepSeq.deepseq
             (_HelloReply'_unknownFields x__)
             (Control.DeepSeq.deepseq (_HelloReply'message x__) ())
{- | Fields :
     
         * 'Proto.Hello_Fields.name' @:: Lens' HelloRequest Data.Text.Text@ -}
data HelloRequest
  = HelloRequest'_constructor {_HelloRequest'name :: !Data.Text.Text,
                               _HelloRequest'_unknownFields :: !Data.ProtoLens.FieldSet}
  deriving stock (Prelude.Eq, Prelude.Ord)
instance Prelude.Show HelloRequest where
  showsPrec _ __x __s
    = Prelude.showChar
        '{'
        (Prelude.showString
           (Data.ProtoLens.showMessageShort __x) (Prelude.showChar '}' __s))
instance Data.ProtoLens.Field.HasField HelloRequest "name" Data.Text.Text where
  fieldOf _
    = (Prelude..)
        (Lens.Family2.Unchecked.lens
           _HelloRequest'name (\ x__ y__ -> x__ {_HelloRequest'name = y__}))
        Prelude.id
instance Data.ProtoLens.Message HelloRequest where
  messageName _ = Data.Text.pack "HelloRequest"
  packedMessageDescriptor _
    = "\n\
      \\fHelloRequest\DC2\DC2\n\
      \\EOTname\CAN\SOH \SOH(\tR\EOTname"
  packedFileDescriptor _ = packedFileDescriptor
  fieldsByTag
    = let
        name__field_descriptor
          = Data.ProtoLens.FieldDescriptor
              "name"
              (Data.ProtoLens.ScalarField Data.ProtoLens.StringField ::
                 Data.ProtoLens.FieldTypeDescriptor Data.Text.Text)
              (Data.ProtoLens.PlainField
                 Data.ProtoLens.Optional (Data.ProtoLens.Field.field @"name")) ::
              Data.ProtoLens.FieldDescriptor HelloRequest
      in
        Data.Map.fromList [(Data.ProtoLens.Tag 1, name__field_descriptor)]
  unknownFields
    = Lens.Family2.Unchecked.lens
        _HelloRequest'_unknownFields
        (\ x__ y__ -> x__ {_HelloRequest'_unknownFields = y__})
  defMessage
    = HelloRequest'_constructor
        {_HelloRequest'name = Data.ProtoLens.fieldDefault,
         _HelloRequest'_unknownFields = []}
  parseMessage
    = let
        loop ::
          HelloRequest -> Data.ProtoLens.Encoding.Bytes.Parser HelloRequest
        loop x
          = do end <- Data.ProtoLens.Encoding.Bytes.atEnd
               if end then
                   do (let missing = []
                       in
                         if Prelude.null missing then
                             Prelude.return ()
                         else
                             Prelude.fail
                               ((Prelude.++)
                                  "Missing required fields: "
                                  (Prelude.show (missing :: [Prelude.String]))))
                      Prelude.return
                        (Lens.Family2.over
                           Data.ProtoLens.unknownFields (\ !t -> Prelude.reverse t) x)
               else
                   do tag <- Data.ProtoLens.Encoding.Bytes.getVarInt
                      case tag of
                        10
                          -> do y <- (Data.ProtoLens.Encoding.Bytes.<?>)
                                       (do value <- do len <- Data.ProtoLens.Encoding.Bytes.getVarInt
                                                       Data.ProtoLens.Encoding.Bytes.getBytes
                                                         (Prelude.fromIntegral len)
                                           Data.ProtoLens.Encoding.Bytes.runEither
                                             (case Data.Text.Encoding.decodeUtf8' value of
                                                (Prelude.Left err)
                                                  -> Prelude.Left (Prelude.show err)
                                                (Prelude.Right r) -> Prelude.Right r))
                                       "name"
                                loop (Lens.Family2.set (Data.ProtoLens.Field.field @"name") y x)
                        wire
                          -> do !y <- Data.ProtoLens.Encoding.Wire.parseTaggedValueFromWire
                                        wire
                                loop
                                  (Lens.Family2.over
                                     Data.ProtoLens.unknownFields (\ !t -> (:) y t) x)
      in
        (Data.ProtoLens.Encoding.Bytes.<?>)
          (do loop Data.ProtoLens.defMessage) "HelloRequest"
  buildMessage
    = \ _x
        -> (Data.Monoid.<>)
             (let _v = Lens.Family2.view (Data.ProtoLens.Field.field @"name") _x
              in
                if (Prelude.==) _v Data.ProtoLens.fieldDefault then
                    Data.Monoid.mempty
                else
                    (Data.Monoid.<>)
                      (Data.ProtoLens.Encoding.Bytes.putVarInt 10)
                      ((Prelude..)
                         (\ bs
                            -> (Data.Monoid.<>)
                                 (Data.ProtoLens.Encoding.Bytes.putVarInt
                                    (Prelude.fromIntegral (Data.ByteString.length bs)))
                                 (Data.ProtoLens.Encoding.Bytes.putBytes bs))
                         Data.Text.Encoding.encodeUtf8 _v))
             (Data.ProtoLens.Encoding.Wire.buildFieldSet
                (Lens.Family2.view Data.ProtoLens.unknownFields _x))
instance Control.DeepSeq.NFData HelloRequest where
  rnf
    = \ x__
        -> Control.DeepSeq.deepseq
             (_HelloRequest'_unknownFields x__)
             (Control.DeepSeq.deepseq (_HelloRequest'name x__) ())
data Greeter = Greeter {}
instance Data.ProtoLens.Service.Types.Service Greeter where
  type ServiceName Greeter = "Greeter"
  type ServicePackage Greeter = ""
  type ServiceMethods Greeter = '["sayHello"]
  packedServiceDescriptor _
    = "\n\
      \\aGreeter\DC2(\n\
      \\bSayHello\DC2\r.HelloRequest\SUB\v.HelloReply\"\NUL"
instance Data.ProtoLens.Service.Types.HasMethodImpl Greeter "sayHello" where
  type MethodName Greeter "sayHello" = "SayHello"
  type MethodInput Greeter "sayHello" = HelloRequest
  type MethodOutput Greeter "sayHello" = HelloReply
  type MethodStreamingType Greeter "sayHello" = 'Data.ProtoLens.Service.Types.NonStreaming
packedFileDescriptor :: Data.ByteString.ByteString
packedFileDescriptor
  = "\n\
    \\vhello.proto\"\"\n\
    \\fHelloRequest\DC2\DC2\n\
    \\EOTname\CAN\SOH \SOH(\tR\EOTname\"&\n\
    \\n\
    \HelloReply\DC2\CAN\n\
    \\amessage\CAN\SOH \SOH(\tR\amessage23\n\
    \\aGreeter\DC2(\n\
    \\bSayHello\DC2\r.HelloRequest\SUB\v.HelloReply\"\NULJ\155\ETX\n\
    \\ACK\DC2\EOT\NUL\NUL\DLE\SOH\n\
    \\b\n\
    \\SOH\f\DC2\ETX\NUL\NUL\DC2\n\
    \.\n\
    \\STX\ACK\NUL\DC2\EOT\ETX\NUL\ACK\SOH\SUB\" The greeting service definition.\n\
    \\n\
    \\n\
    \\n\
    \\ETX\ACK\NUL\SOH\DC2\ETX\ETX\b\SI\n\
    \\US\n\
    \\EOT\ACK\NUL\STX\NUL\DC2\ETX\ENQ\STX5\SUB\DC2 Sends a greeting\n\
    \\n\
    \\f\n\
    \\ENQ\ACK\NUL\STX\NUL\SOH\DC2\ETX\ENQ\ACK\SO\n\
    \\f\n\
    \\ENQ\ACK\NUL\STX\NUL\STX\DC2\ETX\ENQ\DLE\FS\n\
    \\f\n\
    \\ENQ\ACK\NUL\STX\NUL\ETX\DC2\ETX\ENQ'1\n\
    \=\n\
    \\STX\EOT\NUL\DC2\EOT\t\NUL\v\SOH\SUB1 The request message containing the user's name.\n\
    \\n\
    \\n\
    \\n\
    \\ETX\EOT\NUL\SOH\DC2\ETX\t\b\DC4\n\
    \\v\n\
    \\EOT\EOT\NUL\STX\NUL\DC2\ETX\n\
    \\STX\DC2\n\
    \\f\n\
    \\ENQ\EOT\NUL\STX\NUL\ENQ\DC2\ETX\n\
    \\STX\b\n\
    \\f\n\
    \\ENQ\EOT\NUL\STX\NUL\SOH\DC2\ETX\n\
    \\t\r\n\
    \\f\n\
    \\ENQ\EOT\NUL\STX\NUL\ETX\DC2\ETX\n\
    \\DLE\DC1\n\
    \;\n\
    \\STX\EOT\SOH\DC2\EOT\SO\NUL\DLE\SOH\SUB/ The response message containing the greetings\n\
    \\n\
    \\n\
    \\n\
    \\ETX\EOT\SOH\SOH\DC2\ETX\SO\b\DC2\n\
    \\v\n\
    \\EOT\EOT\SOH\STX\NUL\DC2\ETX\SI\STX\NAK\n\
    \\f\n\
    \\ENQ\EOT\SOH\STX\NUL\ENQ\DC2\ETX\SI\STX\b\n\
    \\f\n\
    \\ENQ\EOT\SOH\STX\NUL\SOH\DC2\ETX\SI\t\DLE\n\
    \\f\n\
    \\ENQ\EOT\SOH\STX\NUL\ETX\DC2\ETX\SI\DC3\DC4b\ACKproto3"