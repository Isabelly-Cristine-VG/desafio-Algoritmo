create database missaoafundavel;
use missaoafundavel;

create table jogadores(
idJogador int primary key auto_increment,
nome varchar(50)
);

create table pontuacao(
idPontuacao int primary key auto_increment,
pontuacao int,
fk_idJogador int,
constraint fk_idJogador foreign key (fk_idJogador) references jogadores(idJogador)
);
