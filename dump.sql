PGDMP     9                
    z         	   movieTest #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16851 	   movieTest    DATABASE     `   CREATE DATABASE "movieTest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE "movieTest";
                postgres    false            �            1259    16853    movies    TABLE     �   CREATE TABLE public.movies (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    platform character varying(255) NOT NULL,
    genre character varying(255) NOT NULL,
    status text NOT NULL
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    16852    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    210                       0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    209            �           2604    16856 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210                      0    16853    movies 
   TABLE DATA           C   COPY public.movies (id, name, platform, genre, status) FROM stdin;
    public          postgres    false    210   �
                  0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 5, true);
          public          postgres    false    209            �           2606    16860    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    210               P   x�3��LNUpLO��K-I�ɬ�tL)K�+)-J�O,I�HM�2�t��QpL�/-Q��̩TH��/pM.E���p1z\\\ <��     