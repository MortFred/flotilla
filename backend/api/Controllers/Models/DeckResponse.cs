﻿using System.Text.Json.Serialization;
using Api.Database.Models;

namespace Api.Controllers.Models
{
    public class DeckResponse
    {
        public string Id { get; set; }

        public string DeckName { get; set; }

        public string PlantCode { get; set; }

        public string InstallationCode { get; set; }

        public Pose? DefaultLocalizationPose { get; set; }

        [JsonConstructor]
#nullable disable
        public DeckResponse() { }

#nullable enable

        public DeckResponse(Deck deck)
        {
            Id = deck.Id;
            DeckName = deck.Name;
            PlantCode = deck.Plant.PlantCode;
            InstallationCode = deck.Installation.InstallationCode;
            DefaultLocalizationPose = deck.DefaultLocalizationPose?.Pose;
        }
    }
}
